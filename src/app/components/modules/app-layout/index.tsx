"use client";
import { Fragment, PropsWithChildren, Suspense } from "react";
import AppLayoutContainer, {
  ContentSectionElementContext,
} from "@/app/components/containers/app-layout";
import AppLoading from "@/app/loading";
import Footer from "../../common/footer";
import Navbar from "../../common/navbar";
import Sidebar from "../../common/sidebar";
import AppMenu from "../app-menu";
import AppTab from "../app-tab";

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <AppLayoutContainer
      render={(state) => {
        return (
          <Fragment>
            <Navbar />
            <main className="flex h-[calc(100%-40px)] text-[#a6adbb]">
              <Sidebar
                onClickShape={() => state.setOpenMenu(!state.isOpenMenu)}
              />
              <section className="flex w-full">
                <AppMenu
                  isOpenMenu={state.isOpenMenu}
                  menuList={state.menuList}
                />
                <article className="w-full flex flex-col">
                  <AppTab
                    history={state.history}
                    currentPath={state.currentPath}
                    onCloseTab={state.onCloseTab}
                  />
                  <div
                    className="bg-primary h-full overflow-y-auto"
                    ref={state.contentSectionRef}
                  >
                    <ContentSectionElementContext.Provider
                      value={state.contentSectionElement}
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
