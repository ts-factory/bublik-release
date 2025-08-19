import React, { ReactNode, useState, useCallback } from 'react';

import CopyIcon from '@theme/Icon/Copy';
import SuccessIcon from '@theme/Icon/Success';

import styles from './json-with-highlight.styles.module.css';

interface HighlightProps {
  children: ReactNode;
  description?: string;
}

export const Highlight = ({ children, description }: HighlightProps) => {
  if (description) {
    return (
      <span className={styles.highlightWithTooltip} data-tooltip={description}>
        {children}
      </span>
    );
  }

  return <span className={styles.highlight}>{children}</span>;
};

interface CommentProps {
  children: ReactNode;
}

export const Comment = ({ children }: CommentProps) => {
  return <span className={styles.comment}>// {children}</span>;
};

interface JSONFormatterProps {
  children: string;
}

export const JSONFormatter = ({ children }: JSONFormatterProps) => {
  const [copied, setCopied] = useState(false);

  const getRawJson = useCallback(() => {
    return children
      .replace(
        /<Highlight(\s+description="([^"]*)")?>([\s\S]*?)<\/Highlight>/g,
        '$3',
      )
      .replace(/<Comment>([\s\S]*?)<\/Comment>/g, '');
  }, [children]);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(getRawJson()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [getRawJson]);

  const processContent = (content: string) => {
    let processed = content.replace(
      /<Highlight(\s+description="([^"]*)")?>([\s\S]*?)<\/Highlight>/g,
      (_match, _descAttr, description, content) => {
        if (description) {
          return `<span class="${styles.highlight}" data-tooltip="${description}">${content}</span>`;
        }
        return `<span class="${styles.highlight}">${content}</span>`;
      },
    );

    processed = processed.replace(
      /<Comment>([\s\S]*?)<\/Comment>/g,
      '<span class="' + styles.comment + '">// $1</span>',
    );

    return processed;
  };

  return (
    <div className={styles.jsonFormatterContainer}>
      <div className={styles.copyButtonContainer}>
        <button
          className={styles.copyButton}
          onClick={copyToClipboard}
          title="Copy raw JSON"
        >
          {copied ? (
            <>
              <SuccessIcon className={styles.buttonIcon} /> Copied!
            </>
          ) : (
            <>
              <CopyIcon className={styles.buttonIcon} /> Copy
            </>
          )}
        </button>
      </div>
      <pre className={styles.jsonFormatter}>
        <code dangerouslySetInnerHTML={{ __html: processContent(children) }} />
      </pre>
    </div>
  );
};

interface JSONBlockProps {
  json: object | string;
  highlightedPaths?: string[];
  title?: string;
}

export const JSONBlock = (props: JSONBlockProps) => {
  const { json, highlightedPaths = [], title } = props;
  const jsonString =
    typeof json === 'string' ? json : JSON.stringify(json, null, 2);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(jsonString).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [jsonString]);

  const highlightJSON = (jsonStr: string, paths: string[]) => {
    if (paths.length === 0) return jsonStr;

    let result = jsonStr;
    paths.forEach((path) => {
      const parts = path.split('.');
      let searchRegex: RegExp;

      if (parts.length === 1) {
        searchRegex = new RegExp(
          `("${parts[0]}"\\s*:)\\s*("[^"]*"|\\{|\\[|\\d+|true|false|null)`,
          'g',
        );
        result = result.replace(
          searchRegex,
          '<span class="' + styles.highlight + '">$1</span> $2',
        );
      } else {
        // Placeholder
      }
    });

    return result;
  };

  const processedJSON = highlightJSON(jsonString, highlightedPaths);

  return (
    <div className={styles.jsonBlockContainer}>
      <div className={styles.jsonBlockHeader}>
        {title && <div className={styles.jsonBlockTitle}>{title}</div>}
        <div className={styles.copyButtonContainer}>
          <button
            className={styles.copyButton}
            onClick={copyToClipboard}
            title="Copy raw JSON"
          >
            {copied ? (
              <>
                <SuccessIcon className={styles.buttonIcon} /> Copied!
              </>
            ) : (
              <>
                <CopyIcon className={styles.buttonIcon} /> Copy
              </>
            )}
          </button>
        </div>
      </div>
      <pre className={styles.jsonBlock}>
        <code dangerouslySetInnerHTML={{ __html: processedJSON }} />
      </pre>
    </div>
  );
};
