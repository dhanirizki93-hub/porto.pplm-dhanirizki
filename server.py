"""
Local Server Runner for E-Portofolio PPG
Otomatis menjalankan server HTTP lokal dan membuka peramban web default.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        # Format log agar bersih di konsol
        sys.stderr.write(f"[{self.log_date_time_string()}] {args[0]} {args[1]} {args[2]}\n")

def run():
    os.chdir(DIRECTORY)
    port = PORT
    
    # Mencari port yang tersedia jika 8000 sedang digunakan
    max_retries = 10
    httpd = None
    for attempt in range(max_retries):
        try:
            httpd = socketserver.TCPServer(("", port), Handler)
            break
        except OSError:
            print(f"Port {port} sedang digunakan, mencoba port {port + 1}...")
            port += 1

    if not httpd:
        print("Gagal membuka port server lokal. Silakan tutup aplikasi lain yang menggunakan port 8000-8010.")
        return

    url = f"http://localhost:{port}"
    print("=" * 65)
    print("   🎓 E-PORTOFOLIO PPL PPG - LOCAL SERVER RUNNER")
    print("=" * 65)
    print(f"[*] Direktori Kerja : {DIRECTORY}")
    print(f"[*] Server Aktif Di : {url}")
    print(f"[*] Halaman Home    : {url}/index.html")
    print(f"[*] Halaman UTS     : {url}/uts.html")
    print(f"[*] Halaman UAS     : {url}/uas.html")
    print("-" * 65)
    print("[i] Membuka browser web default secara otomatis...")
    print("[i] Tekan CTRL + C di terminal/cmd ini untuk menghentikan server.")
    print("=" * 65)

    # Otomatis membuka URL di web browser bawaan
    webbrowser.open(url)

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n[!] Server dihentikan. Sampai jumpa!")
        httpd.server_close()

if __name__ == "__main__":
    run()
