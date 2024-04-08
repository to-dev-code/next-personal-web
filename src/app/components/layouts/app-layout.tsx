"use client";
import { Fragment, PropsWithChildren } from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import MenuDrawer from "../common/menu";
import Sidebar from "../common/sidebar";
import TabGroup from "../common/tab";
import TabsContainer from "@/app/containers/tabs-container";
import MenuContainer from "@/app/containers/menu-container";

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <Fragment>
      <Navbar />
      <main className="flex h-full">
        <MenuContainer
          render={({ menuList, open, setOpen }) => (
            <Fragment>
              <Sidebar onClickAnyShape={() => setOpen(!open)} />
              <section className="flex w-full">
                <MenuDrawer open={open} menuList={menuList} />
                <article className="w-full flex flex-col">
                  <TabsContainer
                    render={({ currentPath, tabs, onCloseTab }) => (
                      <TabGroup
                        tabs={tabs}
                        currentPath={currentPath}
                        onCloseTab={onCloseTab}
                      />
                    )}
                  />
                  <div className="h-full bg-primary overflow-y-auto">
                    {children}
                  </div>
                </article>
              </section>
            </Fragment>
          )}
        />
      </main>
      <Footer />
    </Fragment>
  );
};

{
  /* <Menu show={showMenu} /> */
}

export default AppLayout;
