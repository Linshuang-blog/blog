// supabaseClient.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Supabase 项目配置信息
const SUPABASE_URL = 'https://xhnsrdrtgyjlhdcrkedh.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhobnNyZHJ0Z3lqbGhkY3JrZWRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0OTA1NzcsImV4cCI6MjA2OTA2NjU3N30.AJGgpfekq5Z1f66zpDgiguGXOZShKnUOY2-l-1Iem-g'

// 创建并导出 Supabase 客户端
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
