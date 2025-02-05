import MechyKeyboardDemo from "app/mechy-keyboard-demo";
import CtaDownloadAnchor from "./components/cta-download-anchor";
import fetchLastVersion from "./lib/fetch-last-version";
import NewVersionBadge from "./components/new-version-badge";
import SpecialThanks from "./components/special-thanks";
import FeaturesSection from "./components/features-section";
import DemoSection from "./components/demo-section";

export default async function Page() {
  const lastVersion = await fetchLastVersion();
  return (
    <section className="px-4 overflow-x-hidden">
      <NewVersionBadge lastVersion={lastVersion} />
      <h1 className="mb-8 text-6xl font-bold tracking-tight text-center sm:text-7xl">
        Give your keyboard a voice.
      </h1>
      <h2 className="mb-12 text-center text-balance">
        Simulate the sounds of typing on a mechanical keyboard. Choose from a
        variety of switches and keycaps and make your keyboard sound unique.
      </h2>
      <CtaDownloadAnchor lastVersion={lastVersion} />
      <DemoSection />
      {/* <MechyKeyboardDemo />
      <small className="hidden mt-4 mb-24 text-center sm:block text-primary-900">
        Go ahead, start typing and enjoy 🤠
      </small> */}
      <FeaturesSection />
      <SpecialThanks />
    </section>
  );
}
