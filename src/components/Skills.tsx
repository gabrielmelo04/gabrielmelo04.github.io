import { CardSkils } from "./CardSkils";

import JavaScriptLogo from "../assets/icons/image_javaScript.svg?react"
import HtmlLogo from "../assets/icons/image_html.svg?react"
import TypescriptLogo from "../assets/icons/image_typescript.svg?react"
import CssLogo from "../assets/icons/image_css.svg?react"
import PytonLogo from "../assets/icons/image_python.svg?react"
import CLogo from "../assets/icons/image_c.svg?react"
import ReactLogo from "../assets/icons/image_react.svg?react"
import NodeLogo from "../assets/icons/image_node.svg?react"
import NextLogo from "../assets/icons/image_next_js.svg?react"
import ReactNativeLogo from "../assets/icons/image_react_native.svg?react"
import ArduinoLogo from "../assets/icons/image_arduino.svg?react"
import TailwindcssLogo from "../assets/icons/image_tailwindcss.svg?react"
import BootstrapLogo from "../assets/icons/image_bootstrap.svg?react"
import ZustandLogo from "../assets/icons/image_zustand.svg?react"
import AxiosLogo from "../assets/icons/image_axios.svg?react"
import CypressLogo from "../assets/icons/image_cypress.svg?react"
import FastifyLogo from "../assets/icons/image_fastify.svg?react"
import PrismaORMLogo from "../assets/icons/image_prisma.svg?react"
import DrizzleORMLogo from "../assets/icons/image_drizzle.svg?react"
import KnexJSLogo from "../assets/icons/image_knex.svg?react"
import SwaggerLogo from "../assets/icons/image_swagger.svg?react"
import VitestLogo from "../assets/icons/image_vitest.svg?react"
import MySQLLogo from "../assets/icons/image_mysql.svg?react"
import PostgreSQLLogo from "../assets/icons/image_postgresql.svg?react"
import GraphqlLogo from "../assets/icons/image_graphql.svg?react"
import DockerLogo from "../assets/icons/image_docker.svg?react"
import AWSLogo from "../assets/icons/image_aws.svg?react"
import VaultLogo from "../assets/icons/image_vault.svg?react"
import PulumiLogo from "../assets/icons/image_pulumi.svg?react"
import GrafanaLogo from "../assets/icons/image_grafana.svg?react"
import PrometheusLogo from "../assets/icons/image_prometheus.svg?react"
import CloudflareLogo from "../assets/icons/image_cloudflare.svg?react"
import PandasLogo from "../assets/icons/image_pandas.svg?react"
import MatplotlibLogo from "../assets/icons/image_matplotlib.svg?react"

import { Plus } from "lucide-react";

export function Skills() {
  return (
    <div id="skills" className="w-full flex flex-col items-center justify-center py-8 border-b-2 border-gray-700">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-5 text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-purple-700 drop-shadow-lg">
        Habilidades
      </h2>
      <div className="w-full max-h-[500px] md:max-h-fit flex justify-center flex-wrap gap-2 md:gap-10 overflow-hidden overflow-y-auto">
        <CardSkils>
          <JavaScriptLogo className="w-20 h-20 fill-purple-700 rounded-2xl" />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">JavaScript</span>
        </CardSkils>
        <CardSkils>
          <HtmlLogo className="w-20 h-20 fill-purple-700 rounded-2xl " />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">HTML</span>
        </CardSkils>
        <CardSkils>
          <TypescriptLogo className="w-20 h-20 fill-purple-700 rounded-2xl " />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">TypeScript</span>
        </CardSkils>
        <CardSkils>
          <CssLogo className="w-20 h-20 fill-purple-700 rounded-2xl " />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">CSS</span>
        </CardSkils>
        <CardSkils>
          <PytonLogo className="w-20 h-20 fill-purple-700 rounded-2xl " />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">Python</span>
        </CardSkils>
        <CardSkils>
          <CLogo className="w-20 h-20 fill-purple-700 rounded-2xl " />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">C++</span>
        </CardSkils>
        <CardSkils>
          <ReactLogo className="w-20 h-20 fill-purple-700 rounded-2xl " />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">React JS</span>
        </CardSkils>
        <CardSkils>
          <NodeLogo className="w-20 h-20 text-purple-700 [&>path]:fill-current rounded-2xl stroke-white" />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">Node.js</span>
        </CardSkils>
        <CardSkils>
          <NextLogo className="w-20 h-20 fill-purple-700 rounded-2xl " />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">Next JS</span>
        </CardSkils>
        <CardSkils>
          <ReactNativeLogo className="w-20 h-20 fill-purple-700 rounded-2xl " />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">React Native</span>
        </CardSkils>
        <CardSkils>
          <ArduinoLogo className="w-20 h-20 fill-purple-700 rounded-2xl " />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">Arduino</span>
        </CardSkils>
        <CardSkils>
          <TailwindcssLogo className="w-20 h-20 fill-purple-700 rounded-2xl " />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">Tailwind CSS</span>
        </CardSkils>
        <CardSkils>
          <BootstrapLogo className="w-20 h-20 fill-purple-700 rounded-2xl " />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">Bootstrap</span>
        </CardSkils>
        <CardSkils>
          <ZustandLogo className="w-20 h-20 fill-purple-700 rounded-2xl " />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">Zustand</span>
        </CardSkils>
        <CardSkils>
          <AxiosLogo className="w-20 h-20 fill-purple-700 rounded-2xl " />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">Axios</span>
        </CardSkils>
        <CardSkils>
          <CypressLogo className="w-20 h-20 fill-purple-700 rounded-2xl " />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">Cypress</span>
        </CardSkils>
        <CardSkils>
          <FastifyLogo className="w-20 h-20 fill-purple-700 rounded-2xl " />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">Fastify</span>
        </CardSkils>
        <CardSkils>
          <DrizzleORMLogo className="w-20 h-20 fill-purple-700 rounded-2xl " />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">Drizzle ORM</span>
        </CardSkils>
        <CardSkils>
          <PrismaORMLogo className="w-20 h-20 fill-purple-700 rounded-2xl " />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">Prisma ORM</span>
        </CardSkils>
        <CardSkils>
          <KnexJSLogo className="w-20 h-20 fill-purple-700 rounded-2xl " />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">Knex JS</span>
        </CardSkils>
        <CardSkils>
          <SwaggerLogo className="w-20 h-20 fill-purple-700 rounded-2xl " />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">Swagger</span>
        </CardSkils>
        <CardSkils>
          <VitestLogo className="w-20 h-20 fill-purple-700 rounded-2xl " />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">Vitest</span>
        </CardSkils>
        <CardSkils>
          <PostgreSQLLogo className="w-20 h-20 fill-purple-700 rounded-2xl" />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">PostgreSQL</span>
        </CardSkils>
        <CardSkils>
          <MySQLLogo className="w-20 h-20 fill-purple-700 rounded-2xl" />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">MySQL</span>
        </CardSkils>
        <CardSkils>
          <GraphqlLogo className="w-20 h-20 fill-purple-700 rounded-2xl" />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">GraphQL</span>
        </CardSkils>
        <CardSkils>
          <DockerLogo className="w-20 h-20 fill-purple-700 rounded-2xl" />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">Docker</span>
        </CardSkils>
        <CardSkils>
          <AWSLogo className="w-20 h-20 fill-purple-700 rounded-2xl" />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">AWS</span>
        </CardSkils>
        <CardSkils>
          <VaultLogo className="w-20 h-20 fill-purple-700 rounded-2xl" />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">Vault</span>
        </CardSkils>
        <CardSkils>
          <PulumiLogo className="w-20 h-20 fill-purple-700 rounded-2xl" />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">Pulumi</span>
        </CardSkils>
        <CardSkils>
          <GrafanaLogo className="w-20 h-20 fill-purple-700 rounded-2xl" />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">Grafana</span>
        </CardSkils>
        <CardSkils>
          <PrometheusLogo className="w-20 h-20 fill-purple-700 rounded-2xl" />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">Prometheus</span>
        </CardSkils>
        <CardSkils>
          <CloudflareLogo className="w-20 h-20 fill-purple-700 rounded-2xl" />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">Cloudflare</span>
        </CardSkils>
        <CardSkils>
          <PandasLogo className="w-20 h-20 fill-purple-700 rounded-2xl" />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">Pandas</span>
        </CardSkils>
        <CardSkils>
          <MatplotlibLogo className="w-20 h-20 fill-purple-700 rounded-2xl" />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">Matplotlib</span>
        </CardSkils>
        <CardSkils>
          <Plus className="w-20 h-20 fill-purple-700 rounded-2xl text-purple-700" />
          <span className="text-white font-bold text-sm mt-1 lg:hidden group-hover:block">Outros</span>
        </CardSkils>
      </div>
    </div>
  )
}