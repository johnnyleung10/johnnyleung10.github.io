import { c as create_ssr_component, a as add_attribute, v as validate_component, b as each, e as escape } from "../../../chunks/ssr.js";
import { d as countMonths, a as getTimeDiff, b as getMonthName, P as PROJECTS } from "../../../chunks/params.js";
import { C as Chip } from "../../../chunks/Chip.js";
import { C as Card } from "../../../chunks/Card.js";
import { C as CardTitle, a as ChipIcon } from "../../../chunks/ChipIcon.js";
import { U as UIcon } from "../../../chunks/UIcon.js";
import { C as CardDivider } from "../../../chunks/CardDivider.js";
import { C as CardLogo } from "../../../chunks/CardLogo.js";
import { a as getAssetURL, M as MY_SKILLS } from "../../../chunks/skills.params.js";
import { b as base } from "../../../chunks/paths.js";
import { C as CommonPage } from "../../../chunks/CommonPage.js";
const CardLink_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".card-link.svelte-18qy750:hover{border-color:var(--border-hover)}.card-link.svelte-18qy750:hover:after{content:attr(data-help);display:inline-block;position:absolute;width:max-content;background-color:var(--secondary);padding:5px 10px;right:40%;top:calc(100% + 5px);border:1px solid var(--border);border-radius:15px;z-index:10}",
  map: null
};
const CardLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { to } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.to === void 0 && $$bindings.to && to !== void 0)
    $$bindings.to(to);
  $$result.css.add(css$1);
  return `<a class="card-link row-center relative m-x-2.5px border-1px border-solid border-[var(--border)] p-5px rounded-10px text-inherit svelte-18qy750"${add_attribute("href", to, 0)}${add_attribute("title", label, 0)} target="_blank" rel="noreferrer"${add_attribute("data-help", label, 0)}>${validate_component(UIcon, "UIcon").$$render(
    $$result,
    {
      icon: "i-carbon-link",
      classes: "text-[var(--secondary-text)]"
    },
    {},
    {}
  )} </a>`;
});
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let period;
  let from;
  let to;
  let { project } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  countMonths(project.period.from, project.period.to);
  period = `${getTimeDiff(project.period.from, project.period.to ?? new Date(Date.now() + 1e3 * 60 * 60 * 24))}`;
  from = `${getMonthName(project.period.from.getMonth())} ${project.period.from.getFullYear()}`;
  to = project.period.to ? `${getMonthName(project.period.to.getMonth())} ${project.period.to.getFullYear()}` : "now";
  return `${validate_component(Card, "Card").$$render(
    $$result,
    {
      color: project.color,
      href: `${base}/projects/${project.slug}`
    },
    {},
    {
      default: () => {
        return `${validate_component(CardLogo, "CardLogo").$$render(
          $$result,
          {
            alt: project.name,
            src: getAssetURL(project.logo),
            size: 40,
            radius: "0"
          },
          {},
          {}
        )} <div class="m-t-20px row justify-between items-center">${validate_component(CardTitle, "CardTitle").$$render($$result, { title: project.name }, {}, {})} <div class="row">${each(project.links, (link) => {
          return `${validate_component(CardLink, "CardLink").$$render($$result, { label: link.label ?? "", to: link.to }, {}, {})}`;
        })}</div></div> ${validate_component(CardDivider, "CardDivider").$$render($$result, {}, {}, {})} <div class="row m-b-15px justify-between text-[var(--secondary-text)] text-0.9em font-italic font-300"><p>${escape(project.type)}</p> <p>${escape(period)}</p></div> <p class="text-[0.95em] text-[var(--secondary-text)] font-300 m-t-20px m-b-40px flex-1">${escape(project.shortDescription)}</p> <div class="row justify-between text-0.8em font-400">${validate_component(Chip, "Chip").$$render($$result, {}, {}, {
          default: () => {
            return `${escape(from)}`;
          }
        })} ${from !== to ? `${validate_component(Chip, "Chip").$$render($$result, {}, {}, {
          default: () => {
            return `${escape(to)}`;
          }
        })}` : ``}</div> ${validate_component(CardDivider, "CardDivider").$$render($$result, {}, {}, {})} <div class="row">${each(project.skills, (tech) => {
          return `${validate_component(ChipIcon, "ChipIcon").$$render(
            $$result,
            {
              logo: getAssetURL(tech.logo),
              name: tech.name,
              href: `${base}/skills/${tech.slug}`
            },
            {},
            {}
          )}`;
        })}</div>`;
      }
    }
  )}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".projects-list.svelte-f4z73x{display:grid;grid-template-columns:repeat(3, 1fr);gap:20px}@media(max-width: 1350px){.projects-list.svelte-f4z73x{grid-template-columns:repeat(2, 1fr)}}@media(max-width: 850px){.projects-list.svelte-f4z73x{grid-template-columns:repeat(1, 1fr)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { items, title } = PROJECTS;
  let filters = MY_SKILLS.filter((it) => {
    return items.some((project) => project.skills.some((skill) => skill.slug === it.slug));
  });
  let displayed = [];
  $$result.css.add(css);
  {
    {
      displayed = items.filter((project) => {
        const isFiltered = filters.every((item) => !item.isSelected) || project.skills.some((tech) => filters.some((filter) => filter.isSelected && filter.slug === tech.slug));
        return isFiltered;
      });
    }
  }
  return ` ${validate_component(CommonPage, "CommonPage").$$render($$result, { title }, {}, {
    default: () => {
      return ` ${displayed.length === 0 ? `<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">${validate_component(UIcon, "UIcon").$$render(
        $$result,
        {
          icon: "i-carbon-cube",
          classes: "text-3.5em"
        },
        {},
        {}
      )} <p class="font-300" data-svelte-h="svelte-1jyyf6v">Could not find anything...</p></div>` : `<div class="projects-list mt-5 svelte-f4z73x">${each(displayed, (project) => {
        return `${validate_component(ProjectCard, "ProjectCard").$$render($$result, { project }, {}, {})}`;
      })}</div>`}`;
    }
  })}`;
});
export {
  Page as default
};
