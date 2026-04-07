type Props = {
  title: string;
};

const Breadcrumbs = ({ title }: Props) => {
  return (
    <section className="breadcrumbs-page">
      <div className="container">
        <h1>{title}</h1>

        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">
                <i className="fa fa-home"></i>
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default Breadcrumbs;