"use client";
import { Fragment, PropsWithChildren, Suspense } from "react";
import AppLayoutContainer, {
  ContentSectionElementContext,
} from "@/app/containers/app-layout";
import AppLoading from "@/app/loading";
import Footer from "../../common/footer";
import Navbar from "../../common/navbar";
import Sidebar from "../../common/sidebar";
import AppMenu from "../app-menu";
import AppTab from "../app-tab";

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <AppLayoutContainer
      render={({
        contentSectionElement,
        contentSectionRef,
        menuList,
        isOpenMenu,
        currentPath,
        history,
        onCloseTab,
        setOpenMenu,
      }) => {
        return (
          <Fragment>
            <Navbar />
            <main className="flex h-[calc(100%-40px)] text-[#a6adbb]">
              <Sidebar onClickShape={() => setOpenMenu(!isOpenMenu)} />
              <section className="flex w-full">
                <AppMenu isOpenMenu={isOpenMenu} menuList={menuList} />
                <article className="w-full flex flex-col">
                  <AppTab
                    history={history}
                    currentPath={currentPath}
                    onCloseTab={onCloseTab}
                  />
                  <div
                    className="bg-primary h-full overflow-y-auto"
                    ref={contentSectionRef}
                  >
                    <ContentSectionElementContext.Provider
                      value={contentSectionElement}
                    >
                      <Suspense fallback={<AppLoading />}>{children}</Suspense>
                    </ContentSectionElementContext.Provider>
                  </div>
                </article>
              </section>
            </main>
            <Footer />
          </Fragment>
        );
      }}
    />
  );
};

export default AppLayout;
