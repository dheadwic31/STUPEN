function App() {
  // Tidak perlu menambahkan 'import { useState } from "react"' jika hanya menggunakan anchor link

  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">

            <a href="#home-section" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"> 
              <i className="fa-solid fa-book-open-reader" style={{color: "#fb98cd"}}></i> 
              <span className="ms-2 fs-4">bookstore</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0"> 
    
            <li><a href="#home-section" className="nav-link px-2 text-body-secondary">Home</a></li> 
            <li><a href="#book-section" className="nav-link px-2 text-body-secondary">Book</a></li> 
            <li><a href="#team-section" className="nav-link px-2 text-body-secondary">Team</a></li> 
            <li><a href="#contact-section" className="nav-link px-2 text-body-secondary">Contact</a></li>
          </ul> 
          
          <div className="col-md-3 text-end"> 
            <button type="button" className="btn btn-outline-primary me-2">Login</button> 
            <button type="button" className="btn btn-primary">Register</button> 
          </div>
        </header> 
        
        {/* ======================================================= */}
        {/* ISI / HOME SECTION - Tambahkan ID: home-section */}
        {/* ======================================================= */}
        <div className="container my-5" id="home-section"> 
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg"> 
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3"> 
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">PERPUSTAKAAN DIGITAL</h1> 
              <p className="lead">Selamat Datang di Perpustakaan Digital. Membuka buku berarti membuka jendela dunia. Temukan pengetahuan, inspirasi, dan petualangan tanpa batas hanya di sini.</p> 
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"> 
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Temukan Sekarang</button> 
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Selengkapnya...</button> 
              </div> 
            </div> 
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg"> 
              <img className="rounded-lg-3" src="https://picsum.photos/seed/perpustakaan/800/600" alt="perpustakaan" width="720"/> 
            </div> 
          </div> 
        </div>
        
        {/* ======================================================= */}
        {/* KOLEKSI BUKU / BOOK SECTION -  */}
        {/* ======================================================= */}
        <main id="book-section"> 
          <section className="py-5 text-center container"> 
            <div className="row py-lg-5"> 
              <div className="col-lg-6 col-md-8 mx-auto"> 
                <h1 className="fw-light">Koleksi Buku Pilihan</h1> 
                <p className="lead text-body-secondary">Temukan beragam buku terkenal dari seluruh dunia maupun karya penulis Indonesia.Setiap buku menyimpan kisah, ilmu, dan inspirasi yang bisa membuka cakrawala baru untukmu.</p> 
                <p> 
                  <a href="#book-section" className="btn btn-primary my-2">Views</a> 
                  <a href="#book-section" className="btn btn-secondary my-2">Selengkapnya</a> 
                </p> 
              </div> 
            </div> 
          </section> 
          <div className="album py-5 bg-body-tertiary"> 
            <div className="container"> 
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"> 
           
              <div className="col">
                <div className="card shadow-sm">
                    <img src="https://picsum.photos/300/225?random=1" alt="Sampul Buku Resep" class="bd-placeholder-img card-img-top" height="225" />
                    <div class="card-body">
                        <h5 class="card-title">Kumpulan Resep Nusantara</h5>
                        <p className="card-text">Panduan lengkap masakan tradisional dari Sabang sampai Merauke. Wajib dimiliki para pecinta kuliner.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                            </div>
                            <small className="text-body-secondary fw-bold text-success">Rp 85.000</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col">
                <div class="card shadow-sm">
                    <img src="https://picsum.photos/300/225?random=2" alt="Sampul Buku Pemrograman" class="bd-placeholder-img card-img-top" height="225" />
                    <div className="card-body">
                        <h5 class="card-title">Belajar Pemrograman Dasar</h5>
                        <p className="card-text">Memperkenalkan konsep dasar coding untuk pemula, menggunakan bahasa yang mudah dipahami dan praktis.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                            </div>
                            <small className="text-body-secondary fw-bold text-success">Rp 120.000</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card shadow-sm">
                    <img src="https://picsum.photos/300/225?random=3" alt="Sampul Buku Filosofi Kopi" class="bd-placeholder-img card-img-top" height="225" />
                    <div className="card-body">
                        <h5 class="card-title">Filosofi Kopi dan Kehidupan</h5>
                        <p className="card-text">Kumpulan esai tentang makna hidup yang bisa kita petik dari secangkir kopi pagi.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                            </div>
                            <small className="text-body-secondary fw-bold text-success">Rp 65.000</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card shadow-sm">
                    <img src="https://picsum.photos/300/225?random=4" alt="Sampul Buku Desain Grafis" class="bd-placeholder-img card-img-top" height="225" />
                    <div className="card-body">
                        <h5 class="card-title">Panduan Desain Grafis</h5>
                        <p className="card-text">Pelajari prinsip-prinsip desain, tipografi, dan penggunaan perangkat lunak populer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                            </div>
                            <small className="text-body-secondary fw-bold text-success">Rp 150.000</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col">
                <div class="card shadow-sm">
                    <img src="https://picsum.photos/300/225?random=5" alt="Sampul Buku Sejarah" class="bd-placeholder-img card-img-top" height="225" />
                    <div className="card-body">
                        <h5 class="card-title">Sejarah Dunia Kuno</h5>
                        <p className="card-text">Jelajahi peradaban besar Mesir, Romawi, dan Yunani kuno dengan detail dan kronologi yang akurat.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                            </div>
                            <small className="text-body-secondary fw-bold text-success">Rp 110.000</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card shadow-sm">
                    <img src="https://picsum.photos/300/225?random=6" alt="Sampul Buku Pengembangan Diri" class="bd-placeholder-img card-img-top" height="225" />
                    <div className="card-body">
                        <h5 class="card-title">Jurnal Pengembangan Diri</h5>
                        <p className="card-text">Latihan dan tips praktis untuk meningkatkan produktivitas dan mencapai tujuan pribadi Anda.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                            </div>
                            <small className="text-body-secondary fw-bold text-success">Rp 55.000</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card shadow-sm">
                    <img src="https://picsum.photos/300/225?random=7" alt="Sampul Buku Misteri" class="bd-placeholder-img card-img-top" height="225" />
                    <div className="card-body">
                        <h5 class="card-title">Novel Misteri di Kota Tua</h5>
                        <p className="card-text">Thriller dengan teka-teki yang mencekam, berlatar belakang bangunan kuno di kota pelabuhan.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                            </div>
                            <small className="text-body-secondary fw-bold text-success">Rp 78.000</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card shadow-sm">
                    <img src="https://picsum.photos/300/225?random=8" alt="Sampul Buku Biologi" class="bd-placeholder-img card-img-top" height="225" />
                    <div className="card-body">
                        <h5 class="card-title">Buku Teks Biologi Modern</h5>
                        <p className="card-text">Mencakup genetika, ekologi, dan evolusi dengan ilustrasi yang jelas dan data terbaru.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                            </div>
                            <small className="text-body-secondary fw-bold text-success">Rp 180.000</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card shadow-sm">
                    <img src="https://picsum.photos/300/225?random=9" alt="Sampul Buku Inspiratif" class="bd-placeholder-img card-img-top" height="225" />
                    <div className="card-body">
                        <h5 class="card-title">Kisah Inspiratif Tokoh Dunia</h5>
                        <p className="card-text">Biografi singkat dari orang-orang hebat yang mengubah dunia dengan ide dan kerja keras mereka.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                            </div>
                            <small className="text-body-secondary fw-bold text-success">Rp 70.000</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </main>
        
        {/* ======================================================= */}
        {/* TEAM SECTION -  */}
        {/* ======================================================= */}
        <div className="container my-5 py-5 text-center border-top" id="team-section">
            <h1 className="display-4 fw-bold mb-5">Tim Kami</h1>
            <p className="lead mb-5">Kenali tim pengembang dan pengelola *bookstore* digital ini. Kami berdedikasi untuk memberikan pengalaman membaca terbaik.</p>
            
            <div className="row"> 
              {/* Anggota Tim 1: CEO / Pengembang Utama */}
              <div className="col-lg-4"> 
                  <img 
                      src="https://picsum.photos/seed/people1/140/140" 
                      alt="Foto Profil CEO" 
                      className="bd-placeholder-img rounded-circle" 
                      width="140" 
                      height="140" 
                  />
                  <h2 className="fw-normal mt-3">Rudi Hartono</h2> 
                  <p>Pendiri dan CEO. Bertanggung jawab atas visi produk dan strategi bisnis jangka panjang *bookstore*.</p> 
                  <p><a className="btn btn-secondary" href="#">Lihat Profil »</a></p> 
              </div>

              {/* Anggota Tim 2: Kepala Konten / Editor */}
              <div className="col-lg-4"> 
                  <img 
                      src="https://picsum.photos/seed/people2/140/140" 
                      alt="Foto Profil Kepala Konten" 
                      className="bd-placeholder-img rounded-circle" 
                      width="140" 
                      height="140" 
                  />
                  <h2 className="fw-normal mt-3">Sita Dewi</h2> 
                  <p>Kepala Konten & Kurasi. Memastikan semua koleksi buku berkualitas tinggi dan relevan bagi pembaca.</p> 
                  <p><a className="btn btn-secondary" href="#">Lihat Profil »</a></p> 
              </div>

              {/* Anggota Tim 3: Pengelola Teknis / CTO */}
              <div className="col-lg-4"> 
                  <img 
                      src="https://picsum.photos/seed/people3/140/140" 
                      alt="Foto Profil CTO" 
                      className="bd-placeholder-img rounded-circle" 
                      width="140" 
                      height="140" 
                  />
                  <h2 className="fw-normal mt-3">Bima Sakti</h2> 
                  <p>CTO & Pengembangan Sistem. Memastikan platform berjalan lancar dan aman dengan teknologi terkini.</p> 
                  <p><a className="btn btn-secondary" href="#">Lihat Profil »</a></p> 
              </div>
            </div>
            
        </div>

        {/* ======================================================= */}
        {/* CONTACT SECTION - */}
        {/* ======================================================= */}
        <div className="container my-5 py-5 border-top" id="contact-section">
            <h1 className="display-4 fw-bold text-center mb-5">Hubungi Kami</h1>
            <div className="row justify-content-center">
                
                {/* Kolom Kiri: Informasi Kontak */}
                <div className="col-md-6 col-lg-5 mb-4 mb-md-0">
                    <h2 className="fw-bold mb-3">Informasi Kontak</h2>
                    <p className="lead text-body-secondary">Jangan ragu untuk menghubungi tim dukungan kami. Kami siap melayani Anda 24/7.</p>
                    <ul className="list-unstyled">
                        <li className="mb-2">
                            <i className="fa-solid fa-envelope me-2 text-primary"></i>
                            <strong>Email Dukungan:</strong>
                            <br/>
                            <a href="mailto:support@bookstoredigital.com" className="text-decoration-none">support@bookstoredigital.com</a>
                        </li>
                        <li className="mb-2">
                            <i className="fa-solid fa-phone me-2 text-primary"></i>
                            <strong>Telepon:</strong>
                            <br/>
                            <a href="tel:+6281234567890" className="text-decoration-none">+62 812 3456 7890</a> (Layanan Pelanggan)
                        </li>
                        <li className="mb-2">
                            <i className="fa-solid fa-location-dot me-2 text-primary"></i>
                            <strong>Alamat Kantor Pusat:</strong>
                            <br/>
                            Jl. Digital No. 10, Kota Aksara, Indonesia
                        </li>
                    </ul>
                </div>

                {/* Kolom Kanan: Panggilan Aksi (Button) */}
                <div className="col-md-6 col-lg-5 d-flex flex-column justify-content-center align-items-center align-items-md-start">
                    <h2 className="fw-bold mb-4">Butuh Bantuan Cepat?</h2>
                    <div className="d-grid gap-3 w-100">
                        <button type="button" className="btn btn-lg btn-success">
                            <i className="fa-brands fa-whatsapp me-2"></i>
                            Chat via WhatsApp
                        </button>
                        <button type="button" className="btn btn-lg btn-primary">
                            <i className="fa-solid fa-question-circle me-2"></i>
                            Lihat FAQ (Tanya Jawab)
                        </button>
                        <button type="button" className="btn btn-lg btn-outline-secondary">
                            Kirim Formulir Kontak
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        {/*footer*/}
        <div className="container"> 
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"> 
            <div className="col-md-4 d-flex align-items-center"> 
              <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1" aria-label="Bootstrap"> 
                <svg className="bi" width="30" height="24" aria-hidden="true"><use xlink:href="#bootstrap"></use></svg> 
              </a> 
              <span className="mb-3 mb-md-0 text-body-secondary">© 2025 dheadwicaramoy, Inc</span> 
            </div> 
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex"> 
              <li className="ms-3"><a className="text-body-secondary" href="#" aria-label="Instagram"><svg className="bi" width="24" height="24" aria-hidden="true"><use xlink:href="#instagram"></use></svg></a></li> 
              <li className="ms-3"><a className="text-body-secondary" href="#" aria-label="Facebook"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li> 
            </ul> 
          </footer> 
        </div>
      </div>
    </>
  )
}

export default App;