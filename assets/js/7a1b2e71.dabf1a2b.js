"use strict";(self.webpackChunkbublik_release=self.webpackChunkbublik_release||[]).push([[414],{8404:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"release-v0.2.2","metadata":{"permalink":"/bublik-release/release-v0.2.2","editUrl":"https://github.com/ts-factory/bublik-release/edit/main/blog/2024-02-01-release-v0.2.2/index.mdx","source":"@site/blog/2024-02-01-release-v0.2.2/index.mdx","title":"Release v0.2.2","description":"We are happy to announce Bublik v0.2.2.","date":"2024-02-01T00:00:00.000Z","formattedDate":"February 1, 2024","tags":[{"label":"release","permalink":"/bublik-release/tags/release"}],"readingTime":1.61,"hasTruncateMarker":true,"authors":[{"name":"Kostromin Danil","title":"Bublik UI Maintainer","url":"https://github.com/okt-limonikas","imageURL":"https://github.com/okt-limonikas.png","key":"okt-limonikas"}],"frontMatter":{"title":"Release v0.2.2","authors":["okt-limonikas"],"tags":["release"],"slug":"release-v0.2.2"},"nextItem":{"title":"Release v0.2.1","permalink":"/bublik-release/release-v0.2.1"}},"content":"We are happy to announce **Bublik v0.2.2**.\\n\\n\x3c!--truncate--\x3e\\n\\n# Highlights\\n\\n## Improved history speed\\n\\nWe have improved the speed of the history page by optimizing the backend SQL queries.\\n\\n## Improved import logs\\n\\nNow you can see logs of the import process in real-time while the import is running.\\n\\n![Import logs](./img/import-log.png)\\n\\n:::info\\nLogs updated every 5 seconds.\\n:::\\n\\n## Changelog\\n\\n### Frontend\\n\\n#### \ud83d\udd27 Continuous Integration | CI\\n\\n- **release,ci:** fix formatting and pass env through global config ([03b1dab](https://github.com/ts-factory/bublik-ui/commit/03b1dab85d780bc0fd71b2277fd451c6a8a780bc))\\n\\n#### \ud83d\udc85 Polish\\n\\n- **import:** fix import table overflowing horizontally ([b66d49c](https://github.com/ts-factory/bublik-ui/commit/b66d49ce41918861f9425452610e9a213e8eca17))\\n- **ui:** [toaster] add colors for different states ([2955b94](https://github.com/ts-factory/bublik-ui/commit/2955b94a3611e6129b20fe19da71326fb25d9b6e))\\n\\n#### \ud83d\ude80 New Feature\\n\\n- **import:** add live import logs via polling for changes ([75ab1b1](https://github.com/ts-factory/bublik-ui/commit/75ab1b1a51e548b86c4e4235b61de54f48516bd0))\\n- **run:** add tip for ctrl+click on run page ([5ca2912](https://github.com/ts-factory/bublik-ui/commit/5ca29124d42b79c8a76c662ee0dcad1a7fc2329c))\\n\\n#### \ud83d\udce6 Chores\\n\\n- **auth:** allow access to dev section for unauthenticated users ([b7f83f2](https://github.com/ts-factory/bublik-ui/commit/b7f83f26546526ce9d458c1860af967de82e35de))\\n- **nx:** upgrade nx and it\'s packages to latest versions ([ad45ca6](https://github.com/ts-factory/bublik-ui/commit/ad45ca634506812fdbcd8999f39852cd64f3f484))\\n- **storybook:** cleanup unused imports/types ([e1039f2](https://github.com/ts-factory/bublik-ui/commit/e1039f25d7dbaa75f2070909cd7f7134ca8e33e0))\\n\\n#### \ud83d\udc1b Bug Fix\\n\\n- **build:** adjust release config to allow releases from branches other than `main` ([22a6f6b](https://github.com/ts-factory/bublik-ui/commit/22a6f6be3555e509f16ed7c1b0999dd2d98501d5))\\n- **import:** [import-form] allow empty URL ([33347a3](https://github.com/ts-factory/bublik-ui/commit/33347a30152a6faafb6b5fe9ee6d16a0485faef1))\\n- **log:** fix json log overflow scrolling not working ([537677c](https://github.com/ts-factory/bublik-ui/commit/537677cf6729cacb226645fc9fb905430bf2a535))\\n\\n### Backend\\n\\n#### \ud83d\udc1b Bug Fix\\n\\n- **importruns** fix error on measurement results processing during live import\\n- **run stats** fix error in calculating detailed run statistics\\n- **import** incorrect call to the do_nothing() function\\n- **meta categorization** fix \\"IndexError: list index out of range\\" on meta categorization request\\n- **meta categorization** improve unclear logs message: no priority was specified, defaulting to 4\\n- **deploy** fix logs ticket service should not be restarted if Kerberos keytab is not configured\\n- **deploy** Revive and improve initial deploy script to simplify first time setup\\n- **importruns** fix importruns failed mails sending and log URL\\n\\n#### \ud83d\ude80 Performance\\n\\n- **history** speed up history page by optimizing SQL queries\\n\\n#### \ud83d\udc85 Polish\\n\\n- **deploy** improve deploy usability\\n\\n#### \ud83d\udce6 Chores\\n\\n**deploy, auth** cleanup in auth, deploy"},{"id":"release-v0.2.1","metadata":{"permalink":"/bublik-release/release-v0.2.1","editUrl":"https://github.com/ts-factory/bublik-release/edit/main/blog/2023-12-29-release-v0.1.11/index.mdx","source":"@site/blog/2023-12-29-release-v0.1.11/index.mdx","title":"Release v0.2.1","description":"We are happy to announce Bublik v0.2.1.","date":"2023-12-29T00:00:00.000Z","formattedDate":"December 29, 2023","tags":[{"label":"release","permalink":"/bublik-release/tags/release"}],"readingTime":3.745,"hasTruncateMarker":true,"authors":[{"name":"Kostromin Danil","title":"Bublik UI Maintainer","url":"https://github.com/okt-limonikas","imageURL":"https://github.com/okt-limonikas.png","key":"okt-limonikas"}],"frontMatter":{"title":"Release v0.2.1","authors":["okt-limonikas"],"tags":["release"],"slug":"release-v0.2.1"},"prevItem":{"title":"Release v0.2.2","permalink":"/bublik-release/release-v0.2.2"},"nextItem":{"title":"Release v0.1.10","permalink":"/bublik-release/release-v0.1.10"}},"content":"We are happy to announce **Bublik v0.2.1**.\\n\\n\x3c!--truncate--\x3e\\n\\n# Highlights\\n\\n### Authentication Module\\nAt the moment, the Bublik authentication module exists separately from the rest of the Bublik functionality. If you want to test its work, you can contact the developer of the Bublik.\\n\\n:::info\\nThe authentication module in the Bublik has nothing to do with authentication on the server. Thus, you cannot access the system using your server credentials. To access the system, you need to be registered directly in the Bublik authentication module.\\n:::\\n\\n#### User\\n\\n\\n\\n![Login form](./img/auth.png)\\n\\nRegistration\\nUsers who are not project administrators are registered in the system by the administrator. After user registration, a verification link will be sent to the email address specified during registration. The user will be able to log in only after confirming the email address by clicking on the link from the incoming email.\\n\\nProfile page\\n\\n![Profile page](./img/profile.png)\\n\\nFeatures\\n- update your first and last name;\\n- change the password from your profile;\\n- reset the password via email.\\n\\n#### Administrator\\n\\nAdmin management table\\n\\n![Admin](./img/admin-users.png)\\n\\nRegistration\\nIf you are the administrator of the project and want to be registered in the system, please contact the administrator of the Bublik.\\n\\nFeatures\\n- update your first and last name;\\n- change the password from your profile;\\n- reset the password via email;\\n- view the list of users;\\n- create a user;\\n- change the user\'s first name, last name and password;\\n- deactivate the user.\\n\\n\\n:::info\\nOnly one user can be registered to one email address.\\nIn this release we\'ve added authentication with access to profile and user management for admins\\n:::\\n\\n### Runs\\n\\nWe\'ve added new mode for runs page which contains various charts to get an easy overview of filtered runs\\n\\n:::info\\nSome charts are clickable\\n:::\\n\\n![Runs charts](./img/runs-charts.png)\\n\\n### History expressions\\n\\nAdded expression support for multiple history fields\\n\\n![History expressions](./img/history-fields.png)\\n\\n### Import logs\\n\\nIntegrated import logs\\n\\n![Import logs](./img/import-logs.png)\\n\\n## Changelog\\n\\n### Frontend\\n\\n#### \ud83d\ude80 New Feature\\n\\n- **dashboard:** add popover button with icon and comment if run is marked as compromised\\n- **dashboard:** add TV mode for dashboard for fullscreen viewing\\n- **auth:** add authentication\\n- **auth:** add user profile page\\n- **import:** integrate import logs inside bublik\\n- **history:** sync client filter state with search params\\n\\n#### \ud83d\udc85 Polish\\n\\n- **ui** improve scrollbar behaviour when main container is overflowing\\n- **ui** convert all colors to HSL with support of opacity\\n- **dashboard** replace dashboard mode icons with updated ones\\n- **dashboard** make dashboard errors to display properly\\n\\n#### \ud83d\udc1b Bug Fix\\n\\n- **dashboard** failing recursively on dashboard fetch error\\n- **dashboard** not fetching dashboard when run is marked as compromised\\n- **history** changing date in form and closing not picking correct date\\n- **history** changing mode when no page exists returns 404\\n\\n#### \u267b Code Refactoring\\n\\n- **dashboard** refactor dashboard table as well as search params\\n\\n#### \ud83d\udc77\u200d Build System\\n\\n- **ci** update ci/cd actions to latest versions\\n\\n### Backend\\n\\n#### \ud83d\ude80 New Feature\\n\\n- **import log** create API to return JSON import log\\n- **auth** add the ability to register users ([fb0a439](https://github.com/ts-factory/bublik/commit/fb0a4390ae22e4b6cdbcd3d29f89ea467a542195))\\n- **auth** add the ability to log in ([6428320](https://github.com/ts-factory/bublik/commit/6428320b4517603bd4f49e151658748a5d9a1f28))\\n- **auth** add the ability to get user info ([e438cc5](https://github.com/ts-factory/bublik/commit/e438cc5950966a8265a484a93c890e056a9ec643))\\n- **auth** add the ability to refresh access token ([8911464](https://github.com/ts-factory/bublik/commit/891146419ec10df9777147ec581b05f502fbc0d0))\\n- **auth** add the ability to log out ([ffb2c80](https://github.com/ts-factory/bublik/commit/ffb2c80079020347fc649ea9df633fa78cb82730))\\n- **auth** add the ability to reset password by email ([70f4c50](https://github.com/ts-factory/bublik/commit/70f4c50baf99ec8cc1bf226185216cfb064ea6c3))\\n- **auth** add the ability to reset password from the profile ([9d43203](https://github.com/ts-factory/bublik/commit/9d43203d9163536d56331ae982edb807725f0aff))\\n- **auth** add admin functions and admin verification ([e6a4e50](https://github.com/ts-factory/bublik/commit/e6a4e50d2ca8371d0225b5473fe54d60c6048cda))\\n- **auth** add the ability to update user info yourself ([30a0029](https://github.com/ts-factory/bublik/commit/30a0029ec585e57e159d77ae9bb2750d84271e9c))\\n- **history** separate expressions by meta types\\n- **history** add verdicts expression\\n- **history** add test arguments expression\\n\\n#### \ud83d\udcbe DB changes\\n\\n- **auth** add a custom User model\\n\\n#### \ud83d\udc1b Bug Fix\\n\\n- **import** fix import from bublik.xml\\n- **urls** fix dashboard redirect to v2\\n- **log** check the ID and the page query parameter value\\n- **run stats** take into account DU value when calculating run conclusion\\n- **run stats** fix abnormal counter\\n- **history** change error reporting in filtering by expressions\\n- **history** fix filtering by expressions\\n- **history** fix a list of IDs of filtered runs generation\\n\\n#### \u270f\ufe0f Other\\n\\n- **API v1 removal** move redirection to flower to other redirects\\n- **API v1 removal** move meta categorization web interface to API v2\\n- **API v1 removal** move import log web interface to API v2\\n- **API v1 removal** extend the functionality of the import via API v2"},{"id":"release-v0.1.10","metadata":{"permalink":"/bublik-release/release-v0.1.10","editUrl":"https://github.com/ts-factory/bublik-release/edit/main/blog/2023-10-22-release-v0.1.10/index.mdx","source":"@site/blog/2023-10-22-release-v0.1.10/index.mdx","title":"Release v0.1.10","description":"We are happy to announce Bublik v0.1.10.","date":"2023-10-22T00:00:00.000Z","formattedDate":"October 22, 2023","tags":[{"label":"release","permalink":"/bublik-release/tags/release"}],"readingTime":2.185,"hasTruncateMarker":true,"authors":[{"name":"Kostromin Danil","title":"Bublik UI Maintainer","url":"https://github.com/ol-limonikas","imageURL":"https://github.com/ol-limonikas.png","key":"ol-limonikas"}],"frontMatter":{"title":"Release v0.1.10","authors":["ol-limonikas"],"tags":["release"],"slug":"release-v0.1.10"},"prevItem":{"title":"Release v0.2.1","permalink":"/bublik-release/release-v0.2.1"},"nextItem":{"title":"Release v0.1.8","permalink":"/bublik-release/release-v0.1.8"}},"content":"We are happy to announce **Bublik v0.1.10**.\\nIn this release we focused mainly on improving existing pages and refining user experience\\n\\n\x3c!--truncate--\x3e\\n\\n# Highlights\\n\\n### Floating log table filter toolbar\\n\\nWe\'ve added toolbar floating toolbar at the top of log table to allow access to filters when scrolled after\\n\\n![Button to open toolbar](./img/toolbar-1.png)\\n\\n![Opened toolbar](./img/toolbar-2.png)\\n\\n### Log time\\n\\nYou can now see time delta relative to selected row if you enable \\"time delta mode\\"\\n\\n![Log delta](./img/delta-1.png)\\n\\n### Improved sidebar scrolling\\n\\nWe improved sidebar scrolling\\n\\n:::info\\nIn collapsed state sidebar will expand links for active page only\\n:::\\n\\n:::tip\\nYou can press `S` on keyboard to open or collapse sidebar without clicking\\n:::\\n\\n![Sidebar](./img/sidebar-1.png)\\n\\n### Reworked import form\\n\\n:::tip\\nYou can paste multiple URLs separated by space or newline character to prefill the form faster\\n:::\\n\\n![Import form](./img/import-form-1.png)\\n\\n## Changelog\\n\\n### Frontend\\n\\n## [0.26.0] (2023-10-20)\\n\\n### \ud83d\ude80 New Feature\\n\\n- **router:** start loading whole app with spinner\\n- **ui:** [form-alert]: add form alert component\\n- **ui:** [sidebar] improve scrollbar behaviour for sidebar\\n- **log:** add floating toolbar\\n\\n### \ud83d\udc1b Bug Fix\\n\\n- **import:** base query not adding prefix in queryFn\\n- **log:** animation not working for highlighting row\\n- **log:** properly handle errors from JSON API\\n- **diff:** improve error message when no ids selected\\n- **types:** remove runs config type from router\\n- **auth:** [login-form] display error when invalid credentials provided\\n- **run:** [page] not prefetching tree in log page\\n\\n### \ud83d\udce6 Chores\\n\\n- **changelog:** [confetti] remove changelog modal\\n- **import:** add 4 default rows for import\\n- **sidebar:** remove tests link from sidebar\\n- **log:** change title of log level\\n- **nx:** migrate to latest nx\\n- **ui:** fix some react keys logic\\n- cleanup old todos\\n\\n### \ud83d\udc85 Polish\\n\\n- **dashboard:** fix border-radius not being consistent in header\\n- **log:** fix floating button overlaying toolbar popovers\\n- **run:** add styles for sorted columns\\n- **log:** add partially expanded row color\\n- **log:** emphasize floating toolbar button styles\\n- **log:** fix styling for wrapped file block\\n- **log:** improve line breaking for pre-formatted elements\\n- **log:** improve word breaking\\n- **log:** move log bgs to css variables\\n- **ui:** [button] missing border in disabled state\\n- **vars:** change all colors to hsl and allow opacity change\\n- **vars:** fixs overlay opacity\\n\\n### \u267b Code Refactoring\\n\\n- **router:** remove all lazy loaded components\\n- **log:** expand log to level 1 by default\\n- **log:** extract pagination logic into hooks\\n- **log:** improve error messages for JSON logs\\n- **log:** re-arrange log levels via weight parameter\\n\\n### \u2705 Tests\\n\\n- **ui:** update snapshot tests for new css vars"},{"id":"release-v0.1.8","metadata":{"permalink":"/bublik-release/release-v0.1.8","editUrl":"https://github.com/ts-factory/bublik-release/edit/main/blog/2023-08-09-release-v0.1.8/index.mdx","source":"@site/blog/2023-08-09-release-v0.1.8/index.mdx","title":"Release v0.1.8","description":"We are happy to announce Bublik v0.1.8.","date":"2023-08-09T00:00:00.000Z","formattedDate":"August 9, 2023","tags":[{"label":"release","permalink":"/bublik-release/tags/release"}],"readingTime":1.51,"hasTruncateMarker":true,"authors":[{"name":"Kostromin Danil","title":"Bublik UI Maintainer","url":"https://github.com/ol-limonikas","imageURL":"https://github.com/ol-limonikas.png","key":"ol-limonikas"}],"frontMatter":{"title":"Release v0.1.8","authors":["ol-limonikas"],"tags":["release"],"slug":"release-v0.1.8"},"prevItem":{"title":"Release v0.1.10","permalink":"/bublik-release/release-v0.1.10"},"nextItem":{"title":"Release v0.1.5","permalink":"/bublik-release/release-v0.1.5"}},"content":"We are happy to announce **Bublik v0.1.8**.\\nIn this release we focused mainly on improving charts usability.\\n\\n\x3c!--truncate--\x3e\\n\\n# Highlights\\n\\n### Ability to open charts in fullscreen mode\\n\\nYou can now open most of the charts in fullscreen mode\\n\\n![Fullscreen chart button](./img/fullscreen-chart-1.png)\\n\\n![Fullscreen chart](./img/fullscreen-chart-2.png)\\n\\n### Ability to compose multiple charts onto one plot\\n\\n:::info\\nWe are considering moving this view to separate page to allow URL sharing\\n:::\\n\\n![Fullscreen chart](./img/charts-combined-1.png)\\n\\n![Fullscreen chart](./img/charts-combined-2.png)\\n\\n### New runs badge input\\n\\nWe have added new badge input to runs page that should be working better then before.\\nWe are currently looking at changing history badge input and moving it to separate modal with input looking like on the runs page.\\n\\n![Badge input button](./img/badge-1.png)\\n\\n![Badge input](./img/badge-2.png)\\n\\n### Time delta\\n\\n:::caution\\nThis is not final design and UI improvements would be made regarding colors\\n:::\\n\\n![Delta](./img/delta-1.png)\\n\\n## Changelog\\n\\n### Frontend\\n\\n#### \ud83d\udc1b Bug Fix\\n\\n- **log:** time delta not working correctly with timestamps\\n- **ui:** [tags-box-input] removing selected items\\n\\n#### \u267b Code Refactoring\\n\\n- **ui:** [chart] replace chart toolbar with updated\\n\\n#### \ud83d\udc85 Polish\\n\\n- **history:** [plot-list] add shadow to header when sticky\\n- **history:** [refresh] fix animation origin\\n- **measurements:** improve measurements chart layout\\n- **ui:** [button] don\'t allow click when loading\\n- **ui:** [chart] add more space in fullscreen mode\\n- **ui:** [export-button] fix icon and styles\\n- **ui:** [link] missing animation when loading\\n\\n#### \ud83d\udce6 Chores\\n\\n- **log:** add timestamp mock\\n- **measurements:** [chart] remove plot with series\\n- **ui:** [chart] adjust icon sizes\\n- **ui:** [chart] improve voice over labels\\n\\n#### \ud83d\ude80 New Feature\\n\\n- **history, measuremensts:** add fullscreen chart\\n- **history:** [chart] add ability to view charts with multiple Y axises\\n- **ui:** [toolbar] add toolbar component\\n- **log:** add timestamp delta with anchor\\n\\n#### \u2705 Tests\\n\\n- **history, import:** update snapshot tests"},{"id":"release-v0.1.5","metadata":{"permalink":"/bublik-release/release-v0.1.5","editUrl":"https://github.com/ts-factory/bublik-release/edit/main/blog/2023-05-31-release-v0.1.5/index.mdx","source":"@site/blog/2023-05-31-release-v0.1.5/index.mdx","title":"Release v0.1.5","description":"We are happy to announce Bublik v0.1.5","date":"2023-05-31T00:00:00.000Z","formattedDate":"May 31, 2023","tags":[{"label":"release","permalink":"/bublik-release/tags/release"}],"readingTime":3.655,"hasTruncateMarker":true,"authors":[{"name":"Kostromin Danil","title":"Bublik UI Maintainer","url":"https://github.com/ol-limonikas","imageURL":"https://github.com/ol-limonikas.png","key":"ol-limonikas"}],"frontMatter":{"title":"Release v0.1.5","authors":["ol-limonikas"],"tags":["release"],"slug":"release-v0.1.5"},"prevItem":{"title":"Release v0.1.8","permalink":"/bublik-release/release-v0.1.8"},"nextItem":{"title":"Release v0.1.3","permalink":"/bublik-release/release-v0.1.3"}},"content":"We are happy to announce **Bublik v0.1.5**\\nIn this release we added initial support for new log UI. Added ability to open/collapse sidebar menus.\\nMany more style and internal changes\\n\\n\x3c!--truncate--\x3e\\n\\n# Highlights\\n\\n### Reworked sidebar\\n\\nWe\'ve added ability to show/hide collapsed menus inside sidebar at any time. Now you can jump back and forth between different pages\\n\\n:::tip\\nAlso you can now hide/show sidebar by pressing **`S`** on the keyboard\\n:::\\n\\n![Reworked sidebar](./img/Capture-2023-06-09-103917.png)\\n\\n### New changelog UI\\n\\nWe also added changelog\\n\\n![New changelog](./img/Capture-2023-06-09-104647.png)\\n\\n### Reworked run toolbar\\n\\nWe\'ve moved toolbar with various buttons\\n\\n![Reworked toolbar](./img/Capture-2023-06-09-104900.png)\\n\\nAdded ability to hide/show columns via dropdown menu\\n\\n![Toggle run table columns](./img/Capture-2023-06-09-105115.png)\\n\\n### Opening NOK results on link click\\n\\nYou can now go to run with opened results by clicking on NOK with `Ctrl+click`\\n\\n![Nok results](./img/Capture-2023-06-09-105620.png)\\n\\n### New log UI\\n\\n:::caution\\nThis is experimental feature and may not work as expected!\\n:::\\n\\nIn this release we started to integrate new log UI this is still work in progress.\\nWe want to hear your feedback and features you maybe want :)\\n\\n![New log UI](./img/Capture-2023-06-09-110507.png)\\n\\n## Changelog\\n\\n### Frontend\\n\\n#### \ud83d\udcdd Documentation\\n\\n- **config:** adjust docs to new build pipeline\\n\\n#### \ud83d\udc77\u200d Build System\\n\\n- **size:** extract echarts chunk manulally to reduce size\\n- **vite:** add ability to specify remote JSON logs storage\\n\\n#### \ud83d\udd27 Continuous Integration | CI\\n\\n- **build:** fix failing to parse passed args\\n- **build:** skip changelog for beta releases\\n\\n#### \u267b Code Refactoring\\n\\n- **icon:** convert all icons to `.svg`\\n- **run:** change displayed run columns\\n- **ui:** replace all skeletons with component\\n\\n#### \ud83d\udc1b Bug Fix\\n\\n- **history:** lazy loading modules\\n- **log:** [frame] not saving line number on subsequent navigations\\n- **runs:** date range picker no label warning\\n- **runs:** importing from lazy loaded module\\n\\n#### \ud83d\udc85 Polish\\n\\n- **animation:** [dialog] add animation to dialog content\\n- **changelog:** add confetti explosion on new release\\n- **history:** add animation to context menu\\n- **history:** align reset buttons with close button\\n- **import:** fix overflow scrollbars\\n- **import:** make modal title bigger\\n- **run:** [table] add group columns with border\\n- **run:** add background on row hover\\n- **run:** uppercase table columns\\n- **tooltip:** change shadow\\n\\n#### \ud83d\ude80 New Feature\\n\\n- **ci:** add changelog to the ui\\n- **faq:** add latest tag info\\n- **formatting:** convert formatting to use tabs\\n- **log:** add experimental support for JSON logs\\n- **log:** add initial support for displaying log content\\n- **log:** add pagination support to schema\\n- **log:** add pagination support to schema\\n- **run:** [results-table] add key list with URLs\\n- **run:** add column visibility toggle to run/diff pages\\n- **run:** add tooltips to details/toolbar buttons\\n- **sidebar:** add collapsible links\\n- **sidebar:** show/hide sidebar on `s` keypress\\n- **ui:** add dropdown menu component\\n- **ui:** add skeleton component\\n\\n#### \u23ea Reverts\\n\\n- **log:** [frame] not saving line number on navigations\\n- **run:** rollback renaming column ids for run table\\n\\n#### \u2705 Tests\\n\\n- **ci:** fix lint command\\n- **e2e:** add playwright support\\n- **history:** add some snapshot tests to history\\n- **import:** fix snapshot for overflow table\\n- **import:** fix snapshot test for loading table state\\n- **log:** remove build target from lib\\n- **run:** fix div instead of button when no URL present\\n- **ui:** [clock] fix timezone issue in CI\\n- **ui:** [icon] fix svgr not loading in vitest\\n\\n#### \ud83d\udce6 Chores\\n\\n- **build:** migrate from webpack to vite\\n- **build:** upgrade vite to v4.3\\n- **changelog:** [modal] disable modal until checkbox is ready\\n- **changelog:** lazy load changelog\\n- **ci:** add new commit types\\n- **ci:** fix compare URL\\n- **ci:** update pipeline for manual releases\\n- **deploy:** adjust API for new JSON format\\n- **env:** move all env configs to bublik app config\\n- **log:** add run ID to tab title\\n- **log:** remove zod schema converting to JSON from production bundle\\n- **nx:** upgrade nx to 16.2.1\\n- **release:** v0.16.0\\n- **test:** update snapshots\\n\\n### Backend\\n\\n#### \ud83d\udc85 Polish\\n\\n- update run stats structure\\n- reduce the number of requests when fetching the result details\\n- reduce the number of queries to the DB for retrieving metas and test arguments\\n- recalculate stats for the previously imported runs\\n- avoid measurement results dups after live import\\n\\n#### \ud83d\ude80 New Feature\\n\\n- implement the new API to get JSON log URL\\n- add runtime to the import table"},{"id":"release-v0.1.3","metadata":{"permalink":"/bublik-release/release-v0.1.3","editUrl":"https://github.com/ts-factory/bublik-release/edit/main/blog/2023-03-17-release-v0.1.3/index.mdx","source":"@site/blog/2023-03-17-release-v0.1.3/index.mdx","title":"Release v0.1.3","description":"We are happy to announce Bublik v0.1.3","date":"2023-03-17T00:00:00.000Z","formattedDate":"March 17, 2023","tags":[{"label":"release","permalink":"/bublik-release/tags/release"}],"readingTime":1.26,"hasTruncateMarker":true,"authors":[{"name":"Kostromin Danil","title":"Bublik UI Maintainer","url":"https://github.com/ol-limonikas","imageURL":"https://github.com/ol-limonikas.png","key":"ol-limonikas"}],"frontMatter":{"title":"Release v0.1.3","authors":["ol-limonikas"],"tags":["release"],"slug":"release-v0.1.3"},"prevItem":{"title":"Release v0.1.5","permalink":"/bublik-release/release-v0.1.5"},"nextItem":{"title":"Release v0.1.2","permalink":"/bublik-release/release-v0.1.2"}},"content":"We are happy to announce **Bublik v0.1.3**\\n\\nAdded features, bugs and more!\\n\\n\x3c!--truncate--\x3e\\n\\n# Highlights\\n\\n### New icon for skipped tests\\n\\n![Log page tree skipped tests](./img/SCR-20230318-chrl.png)\\n\\n### Added more data to import event table\\n\\n![Import page table](./img/SCR-20230318-cjpi.png)\\n\\n### New form for importing multiple runs at once\\n\\n![Import multiple runs at once](./img/SCR-20230317-hkff.png)\\n\\n![Import list results](./img/SCR-20230317-hlar.png)\\n\\n## Changelog\\n\\n### Frontend\\n\\n#### \ud83d\ude80 New Feature\\n\\n- feat(dashboard): expand NOK result on link click for `unexpected`\\n- feat(import): add form for importing multiple runs at once\\n- feat(import): add filter by task id, error message, log URL to form\\n- feat(log): mark skipped tests with icon\\n\\n#### \ud83d\udc1b Bug Fix\\n\\n- fix(import): fix sidebar not sticking when table overflows page\\n\\n#### \ud83d\udc85 Polish\\n\\n- style(import): fix header dissapearing on when error present\\n- style(import): overflowing table should be scrollable\\n- chore(history): format dates in header legend\\n\\n---\\n\\n### Backend\\n\\n#### \ud83d\ude80 New Feature\\n\\n- change the error message structure\\n- add \'skipped\' info to the iteration data forwarded to the UI\\n- add new endpoint /v2/importruns/source to make imports from import status table\\n\\n#### \ud83d\udc1b Bug Fix\\n\\n- runs import without logs\\n\\n#### \u270f\ufe0f Other\\n\\n- add facility, severity, timestamp and Error message to the import statuses table\\n- add filtration by Celery task ID, Error message, Log URI to the import statuses table\\n- change the format of storing the expected result keys\\n- move key parsing from the import stage to the statistics generation stage\\n- add support for \\"ref://type/tail\\" keys to key parsing"},{"id":"release-v0.1.2","metadata":{"permalink":"/bublik-release/release-v0.1.2","editUrl":"https://github.com/ts-factory/bublik-release/edit/main/blog/2023-02-20-release-v0.1.2/index.mdx","source":"@site/blog/2023-02-20-release-v0.1.2/index.mdx","title":"Release v0.1.2","description":"We are happy to announce Bublik v0.1.2","date":"2023-02-20T00:00:00.000Z","formattedDate":"February 20, 2023","tags":[{"label":"release","permalink":"/bublik-release/tags/release"}],"readingTime":1.73,"hasTruncateMarker":true,"authors":[{"name":"Kostromin Danil","title":"Bublik UI Maintainer","url":"https://github.com/ol-limonikas","imageURL":"https://github.com/ol-limonikas.png","key":"ol-limonikas"}],"frontMatter":{"title":"Release v0.1.2","authors":["ol-limonikas"],"tags":["release"],"slug":"release-v0.1.2"},"prevItem":{"title":"Release v0.1.3","permalink":"/bublik-release/release-v0.1.3"},"nextItem":{"title":"Release v0.1.1","permalink":"/bublik-release/release-v0.1.1"}},"content":"We are happy to announce **Bublik v0.1.2**\\n\\nIn this release we focused on more robust error experience, so you can have more context on what exactly went wrong.\\nAlso, we added more self-describing tab names, so you can easily find what you are looking for.\\n\\n\x3c!--truncate--\x3e\\n\\n# Highlights\\n\\n## Error details\\n\\n### Example error\\n\\n![Error details](./img/history-error.png)\\n\\n## History context menu\\n\\n:::info\\nSelecting tags will apply filters and refetch the data. <br/>\\nIt works just like clicking refresh button\\n\\n:::\\n\\n![History context menu](./img/history-context-menu.png)\\n\\n## Tab names\\n\\n### Example tab names\\n\\n![Tab names](./img/tabs.png)\\n\\n## Details diff\\n\\n### Example diff\\n\\n![Details diff](./img/details-diff.png)\\n\\n## Event logs\\n\\n### Example event logs table\\n\\n![Events logs table](./img/event-log.png)\\n\\n## Changelog\\n\\n### Frontend\\n\\n#### \ud83d\ude80 New Feature\\n\\n- feat(history): add reset button to history global filter form\\n- feat(history): add context menu to history linear/aggregation tables\\n- feat(help): bake frontend revisions into deploy-info component at build time\\n- feat(dev): add events table with celery task status and links to logs/flower\\n- feat(run-diff): [details] add diff for run info details\\n\\n#### \ud83d\udc1b Bug Fix\\n\\n- fix(history): remove unnecessary requests if no test name is found\\n- fix(history): failing to parse URL search params on some requests\\n- fix(runs): add total percentage of expected runs\\n- fix(run-diff): don\'t show suspence loading spinner for run-diff page\\n- fix(dev): flower URL is incorrect in iframe\\n- fix(ui): [datepickers] wrong order of date segments and wrong literals\\n\\n#### \ud83d\udc85 Polish\\n\\n- style(history): add backdrop blur for dialogs\\n- style(history): place duration in column to save some space\\n- style(run): add empty state for run page\\n- chore(sidebar): move flower/import/tests links under dev menu\\n\\n---\\n\\n### Backend\\n\\n#### \ud83d\ude80 New Feature\\n\\n- the table of import statuses is added to the dev section\\n\\n#### \ud83d\udcbe DB changes\\n\\n- added a new model - EventLog to log Bublik events\\n\\n#### \ud83d\udc1b Bug Fix\\n\\n- parse and show plan info\\n\\n#### \u270f\ufe0f Other\\n\\n- persistent option added to the Flower service to save Celery tasks after services restart\\n- changes applied to gunicorn and nginx to change max buffer and size of URIs"},{"id":"release-v0.1.1","metadata":{"permalink":"/bublik-release/release-v0.1.1","editUrl":"https://github.com/ts-factory/bublik-release/edit/main/blog/2023-01-20-release-v0.1.1/index.mdx","source":"@site/blog/2023-01-20-release-v0.1.1/index.mdx","title":"Release v0.1.1","description":"We are happy to announce Bublik v0.1.1","date":"2023-01-20T00:00:00.000Z","formattedDate":"January 20, 2023","tags":[{"label":"release","permalink":"/bublik-release/tags/release"}],"readingTime":3.515,"hasTruncateMarker":true,"authors":[{"name":"Kostromin Danil","title":"Bublik UI Maintainer","url":"https://github.com/ol-limonikas","imageURL":"https://github.com/ol-limonikas.png","key":"ol-limonikas"}],"frontMatter":{"title":"Release v0.1.1","authors":["ol-limonikas"],"tags":["release"],"slug":"release-v0.1.1"},"prevItem":{"title":"Release v0.1.2","permalink":"/bublik-release/release-v0.1.2"}},"content":"We are happy to announce **Bublik v0.1.1**\\n\\nWe\'ve added experimental support for comparing two runs, new datepicker component with better accessibility and keyboard navigation, new page mode for history where you can see values change over time and more.\\n\\n\x3c!--truncate--\x3e\\n\\n# Highlights\\n\\n## Run Diff\\n\\n:::caution\\n\\nThis feature is experimental and may not work as expected\\n\\n:::``\\n\\n### Diff view\\n\\nIn this release we\'ve added experimental support for comparing two runs\\n\\n![Run diff page](./img/run-diff-page.png)\\n\\n### Access diff from runs page\\n\\nYou can now click on two run rows on runs page and select `Compare` button to compare them\\n\\n![Runs selection](./img/runs-to-diff.png)\\n\\n### Access diff from run page\\n\\nYou can access this page via `Run` -> `Compare` button\\n\\n![Compare button](./img/compare-button.png)\\n\\n---\\n\\n## History\\n\\n### Filter Reset\\n\\nYou can now reset client side filters in history page\\n\\n:::info\\n\\nSometimes client side filters _(click search)_ may not work as expected. In this case you can reset them by clicking on `Reset filters` button\\n\\n:::\\n\\n![History reset filters](./img/history-reset-filters.png)\\n\\n### Measurements\\n\\nWe\'ve also added a new page mode for history where you can see values change over time\\n\\n![History charts](./img/history-charts.png)\\n\\n#### Measurement Info\\n\\nYou can click on chart point to bring up modal with additional information as well as ability to jump directly to log/measurements/run\\n\\n![History charts modal](./img/history-chart-modal.png)\\n\\n---\\n\\n## New Date pickers\\n\\nWe\'ve added new datepicker component with better accessibility and keyboard navigation\\n\\n### Datepicker\\n\\n![Datepicker](./img/datepicker.png)\\n\\n### Date-range picker\\n\\n![Date range picker](./img/date-range-picker.png)\\n\\n---\\n\\n## Changelog\\n\\n### Frontend\\n\\n#### \ud83d\ude80 New Feature\\n\\n- feat: add new datepicker component with better accessibility\\n- feat: add new datepicker range component with better accessibility\\n- feat(run): add URL state handling for run table\\n- feat(run): add ability to compare runs via form in run\\n- feat(run): add skeleton loading for run details state\\n- feat(run-diff): add initial run-diff page\\n- feat(measurements): add suspended ui and skeleton for history measurements\\n- feat(log): add skeleton loading to log tree\\n- feat(help): add better error message when couldn\'t fetch revisions\\n- feat(history): add reset client side filters button to history\\n\\n#### \ud83d\udc1b Bug Fix\\n\\n- fix(run): `crtl + click` not applying filters to subtree\\n- fix(run-diff): change the way arrow direction is decided for run-diff\\n- fix(run-diff): improve package matching\\n- fix(help): tooltip with revision info not working\\n- fix(measurements): gap in value table column\\n- fix: enable horizontal scroll for badge input by default\\n- fix(measurements): export crashing on empty values\\n- refactor(runs): rewrite runs page with better architecture\\n- refactor(history): rewrite history page with better architecture\\n\\n#### \ud83d\udc85 Polish\\n\\n- fix(history): don\'t reset date range field in history global search\\n- feat(history): add history skeleton on no results found\\n- chore(history): add border around table rows\\n- feat(runs): add skeleton when no results found\\n- chore(runs): add border around table rows\\n- fix: badge rendering as button when no `onClick` handler passed\\n\\n---\\n\\n### Backend\\n\\n#### \ud83d\ude80 New Feature\\n\\n- meta_categorization: change the approach of categorizing metas\\n- commands: add command to add tags extracted from the log\\n\\n#### \ud83d\udc1b Bug Fix\\n\\n- measurements: change the json forwarded to the UI\\n- measurements: increase the speed of processing by using faster sorting and filtering methods for DB objects\\n- measurements: create proper objects in DB when handling measurements\\n- charts: add axises_config and axises titles to the json forwarded to the UI\\n- charts: combine chart that differ only in comments\\n- history: increase the speed by using proper filtration of test results, test runs, results and test\\n- importruns: change an option forwarded to rgt-log-bundle-get-original from TE since it has changed in TE itself\\n- importruns: change the handling of measurements import errors\\n- hash: the default hashing algorithm was changed to avoid creating duplicates in DB\\n- metas: add check for STATUS meta in `meta_data.json`\\n- metas: update metas even if the run is not completed\\n- cache: update cache after new meta categorization process\\n- celery: add option to specify number of task after completing which the worker will be reloaded\\n- run_diff: add execution sequence to the data provided to UI to show run_diff\\n- result_summary: return only summary values not the whole results\\n\\n  #### Other changes\\n\\n- coding_style: apply **black**, **flynt**, **unify** and **isort** to the whole project"}]}')}}]);