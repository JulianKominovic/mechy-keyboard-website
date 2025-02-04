import MechyKeyboardDemo from "app/mechy-keyboard-demo";
import CtaDownloadAnchor from "./components/cta-download-anchor";
import fetchLastVersion from "./lib/fetch-last-version";
import NewVersionBadge from "./components/new-version-badge";
import SpecialThanks from "./components/special-thanks";

export default async function Page() {
  const lastVersion = await fetchLastVersion();
  return (
    <section className="px-4">
      <NewVersionBadge lastVersion={lastVersion} />
      <h1 className="mb-8 font-bold tracking-tight text-center text-7xl">
        Give your keyboard a voice.
      </h1>
      <h2 className="mb-12 text-center text-balance">
        Simulate the sounds of typing on a mechanical keyboard. Choose from a
        variety of switches and keycaps and make your keyboard sound unique.
      </h2>
      <CtaDownloadAnchor lastVersion={lastVersion} />

      <MechyKeyboardDemo />
      <small className="block mt-4 text-center text-primary-900">
        Go ahead, start typing and enjoy 🤠
      </small>
      <SpecialThanks />
    </section>
  );
}
