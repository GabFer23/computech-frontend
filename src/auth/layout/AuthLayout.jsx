import { MainLayout } from '../../general/layout';

export const AuthLayout = ({ children }) => {
  return (
    <>
      <MainLayout>
        <div className="row w-100 justify-content-center align-content-center">
          <div className="p-5 shadow rounded col-sm-12 col-md-8 col-lg-5 ">
            {children}
          </div>
        </div>
      </MainLayout>
    </>
  );
};
