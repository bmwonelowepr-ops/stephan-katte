import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Language } from '../types';

interface ClickToCopyProps {
  text: string;
  displayText?: string;
  className?: string;
  iconClassName?: string;
  currentLang?: Language;
}

const copyLabels: Record<Language, { copied: string; tooltip: string }> = {
  de: { copied: 'Kopiert!', tooltip: 'In die Zwischenablage kopieren' },
  en: { copied: 'Copied!', tooltip: 'Copy to clipboard' },
  ru: { copied: 'Скопировано!', tooltip: 'Скопировать в буфер' },
};

export const ClickToCopy: React.FC<ClickToCopyProps> = ({
  text,
  displayText,
  className = '',
  iconClassName = '',
  currentLang = 'de'
}) => {
  const [copied, setCopied] = useState(false);
  const labels = copyLabels[currentLang] || copyLabels.de;

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch (err) {
      console.error('Failed to copy to clipboard', err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      title={labels.tooltip}
      className={`group relative inline-flex items-center gap-2 cursor-pointer transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#C5A059] rounded-lg ${className}`}
    >
      <span className="font-inherit">{displayText || text}</span>
      <span
        className={`p-1 rounded-md transition-all duration-200 ${
          copied
            ? 'bg-emerald-500/20 text-emerald-400 scale-110'
            : 'bg-[#C5A059]/10 text-[#C5A059] group-hover:bg-[#C5A059]/25 group-hover:scale-105'
        } ${iconClassName}`}
      >
        {copied ? (
          <Check className="w-3.5 h-3.5 shrink-0 animate-in zoom-in" />
        ) : (
          <Copy className="w-3.5 h-3.5 shrink-0" />
        )}
      </span>

      {/* Floating feedback badge */}
      {copied && (
        <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-emerald-600 text-white font-sans text-[11px] font-semibold tracking-wide shadow-lg pointer-events-none whitespace-nowrap z-30 animate-in fade-in zoom-in-95 duration-150">
          {labels.copied}
        </span>
      )}
    </button>
  );
};
