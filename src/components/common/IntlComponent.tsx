import React, { FC, useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import browserLanguage from 'in-browser-language';

import en from '../../translations/en.json';
import pl from '../../translations/pl.json';
import uk from '../../translations/uk.json';
import cz from '../../translations/cz.json';
import de from '../../translations/de.json';
import fr from '../../translations/fr.json';
import ua from '../../translations/ua.json';
import lt from '../../translations/lt.json';
import sk from '../../translations/sk.json';
import it from '../../translations/it.json';
import se from '../../translations/se.json';
import fi from '../../translations/fi.json';
import es from '../../translations/es.json';
import { ELcid, LangList, LanguagesList } from '../../entities/IGlobal';

interface IProps {
    children: React.ReactNode;
}

export const IntlComponent: FC<IProps> = props => {
    const translations: Record<string, Record<string, string>> = {en, pl, uk, cz, de, fr, ua, lt, sk, it, se, fi, es};

    const browserUserLanguage = useMemo(() => {
        const pickedLang = browserLanguage.pick(LangList, 'pl');
        return translations[pickedLang] ? pickedLang : 'pl';
    }, []);

    const messages = useMemo(() => translations[LanguagesList[ELcid.pl] || browserUserLanguage], []);
    const locale = useMemo(() => LanguagesList[ELcid.pl], []);

    return (
        <IntlProvider locale={locale || browserUserLanguage} messages={messages} defaultRichTextElements={{
            br: () => '<br />',
            span: (...chunks) => `<span>${chunks}</span>`,
            em: (...chunks) => `<em>${chunks}</em>`,
            li: (...chunks) => `<li>${chunks}</li>`,
            b: (...chunks) => `<b>${chunks}</b>`,
            i: (...chunks) => `<i>${chunks}</i>`,
            ul: (...chunks) => `<ul>${chunks}</ul>`,
            strong: (...chunks) => `<strong>${chunks}</strong>`
        }}>
            {props.children}
        </IntlProvider>
    );
};