/**
 * Created by zhengwei on 2017/5/4.
 */
hexo.extend.helper.register('m_active', function (path) {
  path = path || '';
  if (!path || path === '/') {
    path = 'index.html'
  } else {
    path = path.replace('/', '');
  }
  var currentPath = this.path;
  var slash = currentPath.indexOf('/');
  if (slash > 0 ) {
    currentPath = currentPath.substring(0, slash)
  }
  return currentPath === path;
});