// styles
import '@/ui/molecules/footer/styles.css';

// nextjs
import Link from 'next/link';

// type
type EntityProps = {
  url: string;
  name: string;
};

export type FooterProps = {
  year: string;
  entity: EntityProps;
  className?: string;
  id?: string;
};

export default async function Footer({
  year,
  entity,
  className,
  id,
}: FooterProps) {
  const classes = ['footerPage'];
  if (className) classes.push(className);

  return (
    <footer role="contentinfo" className={classes.join(' ')} id={id}>
      <div className="wrapper">
        <p>
          <small>
            &copy;{year} <Link href={entity.url}>{entity.name}</Link>. All
            rights reserved.
          </small>
        </p>
      </div>
    </footer>
  );
}
