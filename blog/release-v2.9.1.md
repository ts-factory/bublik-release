We're excited to announce Bublik v2.9.1!
This release focuses on frontend usability and clarity, with faster run navigation, better chart readability, and clearer time context in the UI. We also unified error handling across the backend to ensure consistent response formats, enabling a uniform error experience in the UI, enhanced the security of user-facing error data, and improved initial load performance.

### What's New

**Clickable Run ID Copy** <br />
Run IDs can now be copied directly from a clickable value, making it faster to grab the ID you need.

**Clearer Chart Colors** <br />
Improved color contrast makes charts easier to read at a glance.

<!--truncate-->

## Highlights

### Clickable Run ID Copy

![Clickable Run ID Copy](/bublik-release/blog/img/copy.webp)

## Admin Section

### Backend Update

1. `cd bublik`
2. `git remote update`
3. `git checkout v2.9.1`
4. `./scripts/deploy --steps pip_requirements django_settings run_services`

### Frontend Update

1. Trigger the workflow in your frontend repository
2. Synchronize the mirrors
3. `cd bublik-ui`
4. `git remote update`
5. `git checkout v2.9.1`

### Documentation Update

1. Trigger the workflow in your frontend repository
2. Synchronize the mirrors
3. `cd bublik-docs`
4. `git remote update`
5. `git checkout v2.9.1`

### Docker Instance Update

1. `task backup:create`
2. Open your `.env` file and change `IMAGE_TAG` to `2.9.1`
3. `task pull`
4. `task up`

## Changelog

### Frontend

#### 🚀 New Feature

* **run:** change run ID copy method to clickable value ([4982085](https://github.com/ts-factory/bublik-ui/commit/49820853cd282e9b88253b06b749a56aae6f7b32)), closes [#486](https://github.com/ts-factory/bublik-ui/issues/486)


#### 💅 Polish

* **report:** improve color contrast for charts ([9164a0d](https://github.com/ts-factory/bublik-ui/commit/9164a0d30feb355216de35591b94eb7e6d6c06d3))
* **run:** replace "id" with "ID" in Compare Runs form instruction ([f338115](https://github.com/ts-factory/bublik-ui/commit/f338115fdbca47802b510614238295ebe45ffa04)), closes [#497](https://github.com/ts-factory/bublik-ui/issues/497)


#### 🐛 Bug Fix

* **log:** [preview] fix history link dropdown not visible ([847d541](https://github.com/ts-factory/bublik-ui/commit/847d541c47d122609d3eee9dd8ecd2a7a7a5cb93))
* **run:** [details] not showing skeleton while details loading ([492e72e](https://github.com/ts-factory/bublik-ui/commit/492e72eccfa7eec6e772be584764fa1353b914a8))
* **run:** left-align Notes column header for consistency ([0f37864](https://github.com/ts-factory/bublik-ui/commit/0f37864f5e3c7fe42579991ea0a30b74954d703e)), closes [#490](https://github.com/ts-factory/bublik-ui/issues/490)
* **run:** make result table header cells visible when scrolling in safari ([61e7c3c](https://github.com/ts-factory/bublik-ui/commit/61e7c3cbf4359140a91d6981f5f009b41073b167)), closes [#489](https://github.com/ts-factory/bublik-ui/issues/489)
* **runs:** filter runs by clicked conclusion in bar chart modal ([489dfb0](https://github.com/ts-factory/bublik-ui/commit/489dfb06ac43119aa950923ec6ef3c6eeea7fe8c))
* **run:** show timezone offset in GMT format for dates column header ([80cd576](https://github.com/ts-factory/bublik-ui/commit/80cd57605c5a021cc5c3405ac4b580b3097e81d8))
* **types:** update component types for React 19 compatibility and fix lint issues ([6429c60](https://github.com/ts-factory/bublik-ui/commit/6429c60fe47a90d8c4f915837362440e8674259b))
* **result:** crash caused by incorrect import from react-router ([a9ce75c](https://github.com/ts-factory/bublik-ui/commit/a9ce75c20836134db1af29b765f33dcee609f4b5))



#### ♻ Code Refactoring

* **api:** add support for backend unified error format ([5dbd1a7](https://github.com/ts-factory/bublik-ui/commit/5dbd1a735122147240648b709b1adf91c79615aa))
* **form:** update `setErrorsOnForm` to handle new API error format ([ae3d6d1](https://github.com/ts-factory/bublik-ui/commit/ae3d6d1c0693961a3e7e6c4a8984086f253ab440))
* **form:** use `setErrorsOnForm` in create-config-form ([d7b7319](https://github.com/ts-factory/bublik-ui/commit/d7b73196b791191db9be22dadc7b71f6d9e0008a))
* **form:** use `setErrorsOnForm` in create-project-modal ([aa575bb](https://github.com/ts-factory/bublik-ui/commit/aa575bbbafb6d9d78c480f0578940594b72cf2eb))
* **form:** use `setErrorsOnForm` in import-run-form ([4165f4b](https://github.com/ts-factory/bublik-ui/commit/4165f4bbf3825ef087adb73f909c73efe67e7345))
* **form:** use `setErrorsOnForm` in update-config-form ([ed5f1fa](https://github.com/ts-factory/bublik-ui/commit/ed5f1fa398f0d9029872b337650596740e862f0f))
* **form:** use `setErrorsOnForm` in update-project-modal ([2cd40cc](https://github.com/ts-factory/bublik-ui/commit/2cd40cc0a6e3985105ac0516caecd3d9c0eff728))


#### 📦 Chores

* add github issue and feature request templates ([ebeadd1](https://github.com/ts-factory/bublik-ui/commit/ebeadd192fe271e4fe87e0cddf116ac261bb5a0a))
* **build:** remove deprecated cacheDir from vite configurations ([699528f](https://github.com/ts-factory/bublik-ui/commit/699528fda69da0b47a6076c892bb8ab71b2e84fa))
* **build:** rename vite.config.ts to vite.config.mts for ESM compatibility ([d6d2d2f](https://github.com/ts-factory/bublik-ui/commit/d6d2d2fa8414489751554b8a83769a9dd20d0a61))
* **deps:** upgrade Nx to 20.8.0 and related dependencies ([8de3c93](https://github.com/ts-factory/bublik-ui/commit/8de3c937a05d629afdb5812dd9f78ed9a9f8325a))
* **lint:** update ESLint configurations for Nx 20 compatibility ([64fcb2e](https://github.com/ts-factory/bublik-ui/commit/64fcb2edfd76f1e235f23538e08ab3eb5087cdbf))
* **run:** [details] remove unused import ([e8c6598](https://github.com/ts-factory/bublik-ui/commit/e8c659837b41e8d6e6eaa8e1b4cd27b932d3c3c2))
* **storybook:** remove storybook configuration and all story files ([557ae8a](https://github.com/ts-factory/bublik-ui/commit/557ae8a9fdd96cfb766101036cd1b17683cb2faa))


#### ⚡ Performance Improvements

* improve initial loading for application ([bfdc78f](https://github.com/ts-factory/bublik-ui/commit/bfdc78fc1145dff218e6c5fc624d39485135387d))


#### ✅ Tests

* **deps:** upgrade tests for compatability with nx 22 ([904549f](https://github.com/ts-factory/bublik-ui/commit/904549f0dbaee9f3a411a572ba40b764e9f60f32))
* **form:** add comprehensive tests for setErrorsOnForm ([e16c63e](https://github.com/ts-factory/bublik-ui/commit/e16c63e09a885a2568a29045f97f2d010b6a9773))

---

### Backend

#### 🐛 Bug Fix
- **auth:** ensure consistent error handling and secure system exception logging ([68b6e2a](https://github.com/ts-factory/bublik/commit/68b6e2a627f5586dce1b453fb014caef64d28c90))
- **log:** ensure consistent error handling and secure system exception logging ([a3c3fd8](https://github.com/ts-factory/bublik/commit/a3c3fd838c97046a44ec3fb66c30c89e52cca9d8))
- **event:** ensure consistent error handling and secure system exception logging ([7eb8fa3](https://github.com/ts-factory/bublik/commit/7eb8fa3faabb129d08a00eaa29612e1df2f21dab))
- **results:** ensure consistent error handling and secure system exception logging ([bcd62c8](https://github.com/ts-factory/bublik/commit/bcd62c8a9ca72f07e345cbf368367315f89edf3f))
- **tasks:** make importruns error logs safer ([716c5ff](https://github.com/ts-factory/bublik/commit/716c5ff5f6c6f8f05b653f1a0ea700f396fda2c0))

#### 🚀 New Feature
- **events:** add endpoint to fetch run by Celery task ID ([a2d4408](https://github.com/ts-factory/bublik/commit/a2d440888afea6aeadaca186b2a1547d9276f2ec)), related to [#272](https://github.com/ts-factory/bublik/issues/272)

#### 📦 Chores
- **requirements:** update `python-dateutil` to fix deprecation warnings ([133d486](https://github.com/ts-factory/bublik/commit/133d486a86aa60e507b01c94b2c69c0902f12947))
- **requirements:** update Django version to pick up bug fixes ([dd0fd34](https://github.com/ts-factory/bublik/commit/dd0fd34c9d8e70dce0c7248d06fa5d13a5837be5))
- **settings:** unify naming and improve structure of logging configuration ([9cdba51](https://github.com/ts-factory/bublik/commit/9cdba516bcbe75b154abd56441f398ef24617234))
- **settings:** make bublik.server logs more readable ([5d60afa](https://github.com/ts-factory/bublik/commit/5d60afa916ab921723ed289371f3dbc11437fd02))
- **settings:** redirect error logs to separate file for easier debugging ([a05642b](https://github.com/ts-factory/bublik/commit/a05642be11f6de5360da754ad8b77c899ab23725))
- **logging:** redirect Celery errors to error.log for consolidated tracking ([83d0566](https://github.com/ts-factory/bublik/commit/83d05667eeb28e90b165caf7f6da62a6d71ccd43))

#### ♻️ Code Refactoring
- **exceptions:** improve handling and normalize error responses ([97b9edd](https://github.com/ts-factory/bublik/commit/97b9eddbad60ff0998647ed67d314b3ee2f60d60))
- **exceptions:** add custom error hierarchy to unify and typify error handling ([7011502](https://github.com/ts-factory/bublik/commit/7011502877315a555f3b76e1904ec2789023b187))
- **history:** refine exceptions for missing tests or iters after filtering ([16e9771](https://github.com/ts-factory/bublik/commit/16e977155dcf0e7cecadee8a46bb3c16994c4cdb))
- **measurements:** ensure consistent error handling ([9eb3413](https://github.com/ts-factory/bublik/commit/9eb3413622eb11bc50e8d46246e81f4f5f69b0b5))
- **report:** ensure consistent error handling ([b22cff1](https://github.com/ts-factory/bublik/commit/b22cff194e9ec2ebed9a9b85caec7ba3fded2cc9))
- **dashboard:** ensure consistent error handling ([5a72316](https://github.com/ts-factory/bublik/commit/5a72316b75ea55f3617119315a26cd523eea350f))
- **config:** ensure consistent error handling ([95d2dfd](https://github.com/ts-factory/bublik/commit/95d2dfdfbe7769f9bf125eefae8a33fb1de52221))
- **url:** ensure consistent error handling ([13cdb62](https://github.com/ts-factory/bublik/commit/13cdb624485827bd0dd3b6a74f821110aa0a0157))
- **importruns:** unify importruns API error response format ([f0eab87](https://github.com/ts-factory/bublik/commit/f0eab875d617ca86ce2616e2dd5c4dabfcf719da))
- **logging:** move task logger retrieval for better separation of responsibilities ([64f5f0b](https://github.com/ts-factory/bublik/commit/64f5f0bf2f61f3c3411f9e4297117accbd5d8fa6))
- **logging:** encapsulate task logger handler for cleaner code structure ([8f8de2c](https://github.com/ts-factory/bublik/commit/8f8de2cfc37864867f713a10f1e144c8de311c8a))
- **logging:** ensure single task logger handler to prevent duplicate logs ([8623d29](https://github.com/ts-factory/bublik/commit/8623d2950a6d0746d625e561f69da265a9ad4173))
- **logging:** make task logger retrieval function more general ([0058b5b](https://github.com/ts-factory/bublik/commit/0058b5bd2ab153fdb1f39452af07f9220325f647))
- **logging:** generalize task logger retrieval by sourcing task ID from env ([501955f](https://github.com/ts-factory/bublik/commit/501955f4c475b6e21b73e046c05d62d4885234c7))
- **logging:** make logger retrieval function universal for tasks and server ([1ec0a2e](https://github.com/ts-factory/bublik/commit/1ec0a2e4d4ef0c0c700ee36a5681f8a0c5f6bb85))
- **logging:** route logs based on execution context ([a8b4c6c](https://github.com/ts-factory/bublik/commit/a8b4c6c6592fbe171acae9940c5bb9557651cdd2))
- **importruns:** run importruns command in task context to centralize logging ([4817d90](https://github.com/ts-factory/bublik/commit/4817d90ef97342db74af83b88c3eb8cd4a5892ef))
- **exceptions:** introduce ImportrunsError to improve importruns error reporting ([12679c4](https://github.com/ts-factory/bublik/commit/12679c46bd3afaf3ef95bcb74c347f44268c9693))
- **importruns:** make invalid parameters error message more informative ([5f77bb6](https://github.com/ts-factory/bublik/commit/5f77bb6f36b2d57eb45016c33c8c94b393ac2015))
- **importruns:** automate function execution time logging with decorator ([5e54afc](https://github.com/ts-factory/bublik/commit/5e54afcdcb62f8335886795b0a0f431228e35ae7))
- **importruns:** expose import failures from missing metadata in importruns ([7e50c61](https://github.com/ts-factory/bublik/commit/7e50c617ec4c5fbb09efeb94cf87a63b0e95133f))
- **importruns:** unify run URL mismatch error handling ([402e48e](https://github.com/ts-factory/bublik/commit/402e48e6de86a83f06847c5d9a20141f0be8c6e1))
- **importruns:** unify no metadata error handling ([3f35cb8](https://github.com/ts-factory/bublik/commit/3f35cb81c330146733220c629ec4698d934f2533))
- **metadata:** unify broken essential meta error handling ([969ed8c](https://github.com/ts-factory/bublik/commit/969ed8c63742f0209ee3c827cc9feccd466e3e9c))
- **importruns:** unify incorrect metadata errors handling ([0bdbec8](https://github.com/ts-factory/bublik/commit/0bdbec86787dc4deefb346cf39ec6b3a24331959))
- **metadata:** unify logger formatting for empty meta entries ([725afa4](https://github.com/ts-factory/bublik/commit/725afa46ccd5b6b92ab5b1eb05f74fa488726770))
- **importruns:** improve handling of already imported runs ([410f631](https://github.com/ts-factory/bublik/commit/410f63108665d3db0f10055629408027c91b4fff))
- **importruns:** improve handling of skipping import runs due to period mismatch ([6f10627](https://github.com/ts-factory/bublik/commit/6f106275d2eae0528cd1303513a522995b383275))
- **importruns:** extract import event creation for better separation of concerns ([4718914](https://github.com/ts-factory/bublik/commit/4718914fef2cc34820ab7d3709e111fedbbe1a81))
- **metadata:** make metadata error messages more informative ([b0df19a](https://github.com/ts-factory/bublik/commit/b0df19a842e9e07a9c8fb1dca93260e1436e39f0))
- **importruns:** improve message for missing project ([9682eac](https://github.com/ts-factory/bublik/commit/9682eacd6508b18890fbfdb0a7a5c4d3e4c19b29))
- **metadata:** make error and log messages consisten ([aa5f6ee](https://github.com/ts-factory/bublik/commit/aa5f6ee84c60d0fa805c501d6699d8c3f6a38f82))
- **metadata:** make metadata generation error message safer and more generic ([44755a3](https://github.com/ts-factory/bublik/commit/44755a31a9423cb95d60615fd465edd0a4a4c943))
- **importrun:** improve HTTP error event message construction ([a07eec5](https://github.com/ts-factory/bublik/commit/a07eec563d0eebcad7d0119f050a294aa78127b5))
- **importruns:** improve handling of compromised runs ([eebff02](https://github.com/ts-factory/bublik/commit/eebff020fbc39e276c870aff239d6b8ac411d170))
- **importruns:** centralize handling of URL-fetch failures and compromised runs ([13d64bb](https://github.com/ts-factory/bublik/commit/13d64bbabd9c1da1bf210f2543a2af6cb28f7259))
- **importruns:** extract path-processing event creation for better separation of concerns ([8790926](https://github.com/ts-factory/bublik/commit/87909263d20892a74ed1ee8a82743bfe202971d1))
- **importruns:** centralize URL fetch failure handling ([ac47e22](https://github.com/ts-factory/bublik/commit/ac47e22910fdd78a86bebaf8314d4f45952d1b61))
- **exceprtions:** add debug field to Bublik exceptions to improve debugging ([d5c7e6f](https://github.com/ts-factory/bublik/commit/d5c7e6f105549c7a15956ca4fc8b08d1fb820e19))
- **importruns:** improve importruns failures debugging ([b4d1f54](https://github.com/ts-factory/bublik/commit/b4d1f5408f54656b629583b45aab0948e6118a85))
- **importruns:** improve error handling for duplicate exec seqno ([5933c5d](https://github.com/ts-factory/bublik/commit/5933c5df72ea68d882b79976ad259578796df816))
- **importruns:** improve error handling for duplicate test iteration results ([2946507](https://github.com/ts-factory/bublik/commit/29465076c5f0f66eb6fde34e20fb28e4dff7ddf8))
- **importruns:** improve error handling for unsupported view types ([90cfe1f](https://github.com/ts-factory/bublik/commit/90cfe1f624e3b10922ad9837b5efff3fbc1476cc))

#### 🧹 Cleanup
- **importruns:** clean up unused handling of existing MI artifacts ([a7cbcdf](https://github.com/ts-factory/bublik/commit/a7cbcdfc4266b58663a8db0645da0d334a9d88ef))
