import { useEffect } from 'react';

export const TRANSLATE_DROPDOWN_ID = 'google_translate';

const CALLBACK_KEY = 'googleTranslateElementInit';

const shouldRemoveNode = (node: ChildNode) =>
  node.textContent === 'Powered by ' ||
  (node as HTMLElement).style?.cssText === 'white-space: nowrap;';

const useGoogleTranslate = () => {
  useEffect(() => {    
    (window as any)[CALLBACK_KEY] = () => {
      (window as any).google.translate.TranslateElement(
        {pageLanguage: 'en'},
        TRANSLATE_DROPDOWN_ID,
      );
      setTimeout(() => {
        const parentElement = document
          .getElementById('google_translate')?.childNodes[0];
        if (parentElement) {
          for (let i = parentElement.childNodes.length - 1; i >= 0; i--) {
            const node = parentElement.childNodes[i];
            if (shouldRemoveNode(node)) { parentElement.removeChild(node); }
          }
        }
      }, 1000);
    };
  }, []);

  return CALLBACK_KEY;
};

export default useGoogleTranslate;
