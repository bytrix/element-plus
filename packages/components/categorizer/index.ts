import { App } from 'vue'
import { withInstall } from '@element-plus/utils/with-install'
import Categorizer from './src/index.vue'

// Categorizer.install = (app: App): void => {
//   app.component(Categorizer.name, Categorizer)
// }

export const ElCategorizer = withInstall(Categorizer)
export default ElCategorizer

// export default Categorizer
