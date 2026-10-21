/**
 * Main JavaScript Application for E-Portofolio PPG
 * Features: Dark Mode, Modals, Responsive Navigation, Profile Editor, Local Storage Sync
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initModals();
  initProfileEditor();
  renderDynamicProfile();
  initToast();
});

// ==========================
// 1. THEME / DARK MODE
// ==========================
function initTheme() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const storedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  updateThemeIcons();

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcons();
      showToast(isDark ? 'Mode Gelap diaktifkan' : 'Mode Terang diaktifkan');
    });
  });
}

function updateThemeIcons() {
  const isDark = document.documentElement.classList.contains('dark');
  const sunIcons = document.querySelectorAll('.theme-icon-sun');
  const moonIcons = document.querySelectorAll('.theme-icon-moon');
  
  sunIcons.forEach(icon => {
    if (isDark) {
      icon.classList.remove('hidden');
    } else {
      icon.classList.add('hidden');
    }
  });

  moonIcons.forEach(icon => {
    if (isDark) {
      icon.classList.add('hidden');
    } else {
      icon.classList.remove('hidden');
    }
  });
}

// ==========================
// 2. MOBILE MENU
// ==========================
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
  }
}

// ==========================
// 3. UNIVERSAL MODAL SYSTEM
// ==========================
function initModals() {
  const modalBackdrop = document.getElementById('universal-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  
  if (modalCloseBtn && modalBackdrop) {
    modalCloseBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modalBackdrop.classList.contains('hidden')) {
        closeModal();
      }
    });
  }
}

function openModal(title, contentHtml) {
  const modal = document.getElementById('universal-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  
  if (modal && modalTitle && modalBody) {
    modalTitle.innerHTML = title;
    modalBody.innerHTML = contentHtml;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  const modal = document.getElementById('universal-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    // Stop any playing iframe videos
    const iframes = modal.querySelectorAll('iframe');
    iframes.forEach(f => f.src = '');
  }
}

// Modal Content Generators
function showModulAjarModal(siklusTitle, data) {
  const content = `
    <div class="space-y-5 text-slate-700 dark:text-slate-200">
      <div class="p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800">
        <span class="inline-block px-2.5 py-1 text-xs font-semibold rounded-full bg-teal-600 text-white mb-2">Rancangan Pembelajaran</span>
        <h4 class="text-lg font-bold text-teal-900 dark:text-teal-200">${data.judul || 'Modul Ajar Pembelajaran Inovatif'}</h4>
        <p class="text-sm mt-1 text-teal-800 dark:text-teal-300 leading-relaxed">${data.deskripsi || ''}</p>
      </div>

      <div>
        <h5 class="font-semibold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-2">Fokus Pembelajaran & Diferensiasi:</h5>
        <div class="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm leading-relaxed">
          ${data.fokusDiferensiasi || data.fokus || 'Memadukan diferensiasi konten, proses, dan produk yang berpusat pada kebutuhan murid.'}
        </div>
      </div>

      <div>
        <h5 class="font-semibold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-2">Struktur Komponen Inti Modul:</h5>
        <ul class="space-y-2 text-sm">
          <li class="flex items-start gap-2">
            <span class="text-teal-500 font-bold">✓</span>
            <span><strong>Capaian & Tujuan Pembelajaran:</strong> Terukur dengan indikator KKTP (Kriteria Ketercapaian Tujuan Pembelajaran).</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-teal-500 font-bold">✓</span>
            <span><strong>Pertanyaan Pemantik:</strong> Konseptual dan kontekstual berbasis fenomena nyata kehidupan sehari-hari.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-teal-500 font-bold">✓</span>
            <span><strong>Skenario Berpusat pada Murid:</strong> Pembagian kelompok kolaboratif, scaffolding terarah, dan presentasi bermakna.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-teal-500 font-bold">✓</span>
            <span><strong>Instrumen Asesmen Lengkap:</strong> Asesmen diagnostik awal, asesmen formatif (observasi sikap/kinerja), dan asesmen sumatif.</span>
          </li>
        </ul>
      </div>

      <div class="pt-4 border-t border-slate-200 dark:border-slate-700 flex flex-wrap gap-3 items-center justify-between">
        <span class="text-xs text-slate-500 dark:text-slate-400">Ukuran Berkas: ${data.fileSize || 'PDF Resmi PPL'}</span>
        <div class="flex gap-2">
          <button onclick="window.print()" class="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition">
            🖨️ Cetak Ringkasan
          </button>
          <a href="${data.linkDrive || '#'}" target="_blank" class="px-4 py-2 text-xs font-semibold rounded-lg bg-teal-600 hover:bg-teal-700 text-white shadow-sm flex items-center gap-1.5 transition">
            <span>Unduh / Buka Dokumen Lengkap</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          </a>
        </div>
      </div>
    </div>
  `;
  openModal(`Pratinjau Modul Ajar (${siklusTitle})`, content);
}

function showVideoModal(siklusTitle, videoData) {
  const isEmbeddable = videoData.youtubeId || videoData.embedUrl;
  const embedSrc = videoData.embedUrl || (videoData.youtubeId ? `https://www.youtube.com/embed/${videoData.youtubeId}?autoplay=1` : null);

  const content = `
    <div class="space-y-4">
      <div class="aspect-video w-full rounded-xl overflow-hidden bg-black shadow-lg relative flex items-center justify-center">
        ${isEmbeddable ? `
          <iframe 
            src="${embedSrc}" 
            title="${videoData.judul || 'Video Praktik Pembelajaran'}" 
            class="w-full h-full border-0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        ` : `
          <!-- Interactive Mock Video Player / Embed -->
          <div class="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center text-center p-6">
            <div class="w-16 h-16 rounded-full bg-teal-500/20 border border-teal-500 flex items-center justify-center text-teal-400 mb-3 shadow-inner">
              <svg class="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <h4 class="text-white font-bold text-base md:text-lg mb-1">${videoData.judul}</h4>
            <p class="text-slate-400 text-xs md:text-sm max-w-md">${videoData.durasi || ''}</p>
          </div>
        `}
      </div>

      <div class="flex flex-wrap items-center justify-between gap-3 pt-1">
        <div>
          <h4 class="font-bold text-slate-900 dark:text-white text-sm md:text-base">${videoData.judul}</h4>
          ${videoData.durasi ? `<p class="text-xs text-slate-500 dark:text-slate-400">${videoData.durasi}</p>` : ''}
        </div>
        <a href="${videoData.linkFull || '#'}" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 text-xs font-semibold rounded-lg bg-red-600 hover:bg-red-700 text-white flex items-center gap-1.5 shadow transition">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
          Buka di YouTube
        </a>
      </div>

      <div>
        <h5 class="font-semibold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-2">Linimasa Tahapan Pembelajaran:</h5>
        <div class="divide-y divide-slate-100 dark:divide-slate-800 rounded-lg border border-slate-200 dark:border-slate-800 max-h-52 overflow-y-auto">
          ${(videoData.tahapan || []).map(t => `
            <div class="p-3 text-xs md:text-sm hover:bg-slate-50 dark:hover:bg-slate-800/60 transition flex items-start gap-3">
              <span class="px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-900/60 text-teal-700 dark:text-teal-300 font-mono font-semibold whitespace-nowrap">${t.waktu}</span>
              <div>
                <strong class="text-slate-800 dark:text-slate-200 block">${t.bagian}</strong>
                <span class="text-slate-500 dark:text-slate-400 text-xs">${t.detail}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  openModal(`Video Praktik Pembelajaran - ${siklusTitle}`, content);
}

function showImageModal(title, caption, imgSrc) {
  const content = `
    <div class="space-y-4">
      <div class="rounded-2xl overflow-hidden bg-slate-950 max-h-[65vh] flex items-center justify-center border border-slate-800">
        <img src="${imgSrc}" alt="${title}" class="w-full h-auto max-h-[65vh] object-contain">
      </div>
      <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
        <h4 class="font-bold text-base text-slate-900 dark:text-white mb-1">${title}</h4>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${caption}</p>
      </div>
    </div>
  `;
  openModal(title, content);
}

function showPenilaianModal(siklusTitle, pen) {
  const content = `
    <div class="space-y-4 text-slate-700 dark:text-slate-200">
      <!-- Header Hasil Nilai -->
      <div class="flex flex-col sm:flex-row items-center justify-between p-4 rounded-xl bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-slate-800 dark:to-teal-950/40 border border-teal-200 dark:border-teal-800/80 gap-4">
        <div>
          <span class="text-xs uppercase tracking-wider font-semibold text-teal-700 dark:text-teal-300">Hasil Penilaian Guru Pamong</span>
          <h4 class="text-xl font-bold text-slate-900 dark:text-white">${siklusTitle}</h4>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Penilai: ${pen.namaPamong || 'Guru Pamong PPL'}</p>
        </div>
        <div class="flex items-center gap-3">
          <div class="text-center bg-white dark:bg-slate-900 px-4 py-2 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <span class="text-[10px] text-slate-400 uppercase font-semibold block">Skor Akhir</span>
            <span class="text-2xl font-black text-teal-600 dark:text-teal-400">${pen.nilaiAkhir || pen.skorPraktik}</span>
          </div>
          <div class="text-center bg-white dark:bg-slate-900 px-4 py-2 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <span class="text-[10px] text-slate-400 uppercase font-semibold block">Predikat</span>
            <span class="text-lg font-bold text-amber-500">${pen.predikat || 'A (Sangat Baik)'}</span>
          </div>
        </div>
      </div>

      <!-- Ringkasan Nilai Rancangan & Praktik -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
        <div class="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 block">1. Penilaian Modul Ajar</span>
          <span class="text-lg font-bold text-slate-800 dark:text-slate-100">${pen.skorRancangan} / 100</span>
          <p class="text-xs text-slate-500 mt-1">Kesesuaian CP, TP, sintaks model, LKPD, dan rubrik asesmen.</p>
        </div>
        <div class="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 block">2. Penilaian Praktik Mengajar</span>
          <span class="text-lg font-bold text-slate-800 dark:text-slate-100">${pen.skorPraktik} / 100</span>
          <p class="text-xs text-slate-500 mt-1">Penguasaan kelas, interaksi positif, pemanfaatan media, dan refleksi.</p>
        </div>
      </div>

      <!-- Catatan Kualitatif -->
      <div class="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40">
        <h5 class="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wide flex items-center gap-1.5 mb-1.5">
          <svg class="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/></svg>
          Catatan & Rekomendasi Penguatan Guru Pamong:
        </h5>
        <p class="text-sm italic text-amber-950 dark:text-amber-200 leading-relaxed">"${pen.catatanKualitatif}"</p>
      </div>

      <!-- Berkas Unduhan -->
      <div class="pt-3 border-t border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-950/60 text-red-600 flex items-center justify-center font-bold text-xs">PDF</div>
          <span class="text-xs font-medium text-slate-700 dark:text-slate-300">Lembar Penilaian Resmi Bertanda Tangan</span>
        </div>
        <a href="${(pen.dokumenNilai && pen.dokumenNilai.linkUnduh) || pen.linkUnduh || '#'}" target="_blank" class="px-4 py-2 text-xs font-semibold rounded-lg bg-teal-600 hover:bg-teal-700 text-white shadow-sm flex items-center gap-1.5 transition">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          Unduh Dokumen Berkas
        </a>
      </div>
    </div>
  `;
  openModal(`Lembar Penilaian Guru Pamong (${siklusTitle})`, content);
}

// ==========================
// 4. PROFILE DATA SYNC & EDITOR
// ==========================
function renderDynamicProfile() {
  const data = getPortfolioData();
  const prof = data.profile;
  
  // Update text elements with data-profile attributes
  document.querySelectorAll('[data-profile-name]').forEach(el => el.textContent = prof.nama);
  document.querySelectorAll('[data-profile-nim]').forEach(el => el.textContent = prof.nim);
  document.querySelectorAll('[data-profile-lptk]').forEach(el => el.textContent = prof.lptk);
  document.querySelectorAll('[data-profile-dpl]').forEach(el => el.textContent = prof.dosenPembimbing);
  document.querySelectorAll('[data-profile-pamong]').forEach(el => el.textContent = prof.guruPamong);
  document.querySelectorAll('[data-profile-sekolah]').forEach(el => el.textContent = prof.sekolahPPL);
  document.querySelectorAll('[data-profile-bidang]').forEach(el => el.textContent = prof.bidangStudi);
  document.querySelectorAll('[data-profile-gelombang]').forEach(el => el.textContent = prof.gelombang);
  
  // Profile Photo
  document.querySelectorAll('[data-profile-photo]').forEach(img => {
    if (prof.foto && !prof.foto.includes('drive.google.com')) {
      img.src = prof.foto;
    } else {
      img.src = 'assets/img/profile.jpg';
    }
  });

  // Background and Culture
  const latarEl = document.querySelector('[data-profile-latar]');
  if (latarEl && prof.latarBelakang) {
    latarEl.textContent = prof.latarBelakang.ringkasan;
  }

  const daerahEl = document.querySelector('[data-profile-daerah]');
  if (daerahEl && prof.keunikanDaerah) {
    daerahEl.textContent = prof.keunikanDaerah.deskripsi;
  }
}

function initProfileEditor() {
  const editBtn = document.getElementById('btn-edit-profile');
  if (!editBtn) return;

  editBtn.addEventListener('click', () => {
    const data = getPortfolioData();
    const prof = data.profile;

    const editorHtml = `
      <form id="profile-edit-form" class="space-y-4 text-sm text-slate-700 dark:text-slate-200">
        <p class="text-xs text-slate-500 dark:text-slate-400">Sesuaikan informasi identitas PPG Anda. Data disimpan otomatis di browser (localStorage) komputer Anda.</p>
        
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-semibold mb-1">Nama Lengkap & Gelar</label>
            <input type="text" id="edit-nama" value="${prof.nama || ''}" class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 outline-none" required />
          </div>
          <div>
            <label class="block text-xs font-semibold mb-1">Nomor Induk Mahasiswa (NIM)</label>
            <input type="text" id="edit-nim" value="${prof.nim || ''}" class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 outline-none" required />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-semibold mb-1">LPTK (Universitas)</label>
            <input type="text" id="edit-lptk" value="${prof.lptk || ''}" class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 outline-none" />
          </div>
          <div>
            <label class="block text-xs font-semibold mb-1">Bidang Studi PPG</label>
            <input type="text" id="edit-bidang" value="${prof.bidangStudi || ''}" class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 outline-none" />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-semibold mb-1">Dosen Pembimbing Lapangan (DPL)</label>
            <input type="text" id="edit-dpl" value="${prof.dosenPembimbing || ''}" class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 outline-none" />
          </div>
          <div>
            <label class="block text-xs font-semibold mb-1">Guru Pamong (GP)</label>
            <input type="text" id="edit-pamong" value="${prof.guruPamong || ''}" class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 outline-none" />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-semibold mb-1">Sekolah Mitra PPL</label>
            <input type="text" id="edit-sekolah" value="${prof.sekolahPPL || ''}" class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 outline-none" />
          </div>
          <div>
            <label class="block text-xs font-semibold mb-1">Gelombang / Periode</label>
            <input type="text" id="edit-gelombang" value="${prof.gelombang || ''}" class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 outline-none" />
          </div>
        </div>

        <div>
          <label class="block text-xs font-semibold mb-1">Unggah / Pilih Foto Profil Baru</label>
          <input type="file" id="edit-photo-file" accept="image/*" class="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100" />
          <p class="text-[11px] text-slate-400 mt-1">Mendukung format JPG, PNG, atau WebP (Disarankan foto formal berlatar rapi).</p>
        </div>

        <div class="pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <button type="button" id="btn-reset-data" class="text-xs text-red-600 dark:text-red-400 hover:underline">
            Pulihkan Data Default
          </button>
          <div class="flex gap-2">
            <button type="button" onclick="closeModal()" class="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              Batal
            </button>
            <button type="submit" class="px-5 py-2 text-xs font-semibold rounded-lg bg-teal-600 hover:bg-teal-700 text-white shadow">
              Simpan Perubahan
            </button>
          </div>
        </div>
      </form>
    `;

    openModal("Edit Informasi Identitas Mahasiswa", editorHtml);

    // Form Submit Handler
    const form = document.getElementById('profile-edit-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      prof.nama = document.getElementById('edit-nama').value;
      prof.nim = document.getElementById('edit-nim').value;
      prof.lptk = document.getElementById('edit-lptk').value;
      prof.bidangStudi = document.getElementById('edit-bidang').value;
      prof.dosenPembimbing = document.getElementById('edit-dpl').value;
      prof.guruPamong = document.getElementById('edit-pamong').value;
      prof.sekolahPPL = document.getElementById('edit-sekolah').value;
      prof.gelombang = document.getElementById('edit-gelombang').value;

      const fileInput = document.getElementById('edit-photo-file');
      if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(evt) {
          prof.foto = evt.target.result;
          savePortfolioData(data);
          renderDynamicProfile();
          closeModal();
          showToast('Profil & Foto berhasil diperbarui!');
        };
        reader.readAsDataURL(fileInput.files[0]);
      } else {
        savePortfolioData(data);
        renderDynamicProfile();
        closeModal();
        showToast('Profil berhasil disimpan!');
      }
    });

    // Reset Handler
    document.getElementById('btn-reset-data').addEventListener('click', () => {
      if (confirm('Apakah Anda yakin ingin memulihkan seluruh data profil ke contoh default?')) {
        localStorage.removeItem('ppg_portfolio_data');
        renderDynamicProfile();
        closeModal();
        showToast('Data default berhasil dipulihkan!');
      }
    });
  });
}

// ==========================
// 5. TOAST NOTIFICATION
// ==========================
function initToast() {
  if (!document.getElementById('toast-notification')) {
    const toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'fixed bottom-6 right-6 z-50 transform translate-y-20 opacity-0 transition-all duration-300 ease-out bg-slate-900 text-white dark:bg-teal-700 text-sm font-medium px-4 py-2.5 rounded-xl shadow-xl border border-slate-700/50 flex items-center gap-2 pointer-events-none';
    toast.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
      <span id="toast-message">Pemberitahuan</span>
    `;
    document.body.appendChild(toast);
  }
}

function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const msgEl = document.getElementById('toast-message');
  if (toast && msgEl) {
    msgEl.textContent = message;
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-20', 'opacity-0');
    }, 2800);
  }
}
