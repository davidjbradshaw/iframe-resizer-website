import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "iframe-resizer",
      components: {
        SocialIcons: "./src/components/socials.astro",
      },
      social: {
        github: "https://github.com/davidjbradshaw/iframe-resizer",
      },
      sidebar: [
        {
          label: "Introduction",
          link: "introduction",
        },
        {
          label: "Licenses",
          items: [
            { label: "Comercial License", link: "/license#comercial" },
            { label: "Open Source License", link: "/license#open" },
          ],
        },
        {
          label: "Getting Started",
          link: "getting_started",
        },
        {
          label: "API",
          items: [
            { label: "Parent Page", link: "/api/parent" },
            { label: "Child Page", link: "/api/child" },
          ],
        },
        {
          label: "Frameworks and Libraries",
          items: [
            { label: "React", link: "/frameworks/react" },
            { label: "Vue 3", link: "/frameworks/vue3" },
            { label: "Vue 2", link: "/frameworks/vue2" },
            { label: "jQuery", link: "/frameworks/jquery" },
            {
              label: "Google Apps Scripts",
              link: "/frameworks/google_apps_script",
            },
            { label: "Angular", link: "/frameworks/angular" },
            { label: "Ember", link: "/frameworks/ember" },
            { label: "Framework API", link: "/frameworks/api" },
          ],
        },
        {
          label: "Troubleshooting",
          link: "troubleshooting",
        },
        {
          label: "Upgrade to V5",
          link: "upgrade",
        },
        // {
        //   label: "Reference",
        //   autogenerate: { directory: "reference" },
        // },
      ],
    }),
  ],
});
