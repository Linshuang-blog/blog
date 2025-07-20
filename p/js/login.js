// p/js/login.js
import { supabase } from './supabaseClient.js';

// 登录函数
function signInWithGitHub() {
  supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: window.location.origin + '/donate.html'  // 登陆后跳转回来
    }
  });
}

// 登出函数
async function signOut() {
  await supabase.auth.signOut();
  location.reload();  // 退出后刷新页面
}

// 检查当前登录状态并更新界面
async function checkAuthStatus() {
  const { data: { session } } = await supabase.auth.getSession();

  const loginBtn = document.getElementById('login-btn');
  const userInfo = document.getElementById('user-info');
  const userEmail = document.getElementById('user-email');
  const logoutBtn = document.getElementById('logout-btn');

  if (session && session.user) {
    // 已登录
    if (loginBtn) loginBtn.style.display = 'none';
    if (userInfo) userInfo.style.display = 'block';
    if (userEmail) userEmail.textContent = session.user.email;

    if (logoutBtn) logoutBtn.addEventListener('click', signOut);
  } else {
    // 未登录
    if (loginBtn) loginBtn.style.display = 'block';
    if (userInfo) userInfo.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('login-btn');
  if (loginBtn) {
    loginBtn.addEventListener('click', signInWithGitHub);
  }

  checkAuthStatus();
});