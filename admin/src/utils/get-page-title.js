import defaultSettings from '@/settings'

const title = defaultSettings.title || '并济科技'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
