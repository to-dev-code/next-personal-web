"use client";
import { Fragment, PropsWithChildren, Suspense } from "react";
import AppLayoutContainer, {
  MainContentContext,
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
            <div className="flex h-[calc(100%-40px)] text-base-content">
              <Sidebar
                onClick={() => state.setOpenMenu(!state.isOpenMenu)}
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
                    toggleTheme={state.toggleTheme}
                  />
                  <div
                    className="bg-base-200 h-full overflow-y-auto"
                    ref={state.contentSectionRef}
                  >
                    <MainContentContext.Provider
                      value={state.contentSectionElement}
                    >
                      <Suspense fallback={<AppLoading />}>{children}</Suspense>
                    </MainContentContext.Provider>
                  </div>
                </article>
              </section>
            </div>
            <Footer />
          </Fragment>
        );
      }}
    />
  );
};

export default AppLayout;
