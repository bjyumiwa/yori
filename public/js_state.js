// すでに同名の実装があるならこの内容で上書き or 既存を使ってOK
window.Y_STATE = {
  get(k, d=null){
    const v = localStorage.getItem(k);
    if (v===null) return d;
    try { return JSON.parse(v); } catch { return v; }
  },
  set(k, v){
    localStorage.setItem(k, (typeof v === 'string') ? v : JSON.stringify(v));
  },
  del(k){ localStorage.removeItem(k); }
};

// 画面遷移
window.go = (path)=>{ location.href = path; };
