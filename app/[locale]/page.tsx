import { useTranslations } from "next-intl";
import Link from 'next-intl/link';
import AlertMessage from "./AlertMessage";


export default function Home() {
  const t = useTranslations("Index")
  return (
      <div>
          <div>
              <Link href="/" locale="en">
                  English
              </Link>
              <Link href="/" locale="ru">
                  Русский
              </Link>
          </div>
          <br />
          <br />
          <br />
          <p>{t('title')}</p>
          <p>{t('subtitle')}</p>
          <AlertMessage message={t('alertMessage')} />
      </div>
  );
}
