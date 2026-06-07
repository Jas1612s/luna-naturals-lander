export function RestFooter() {
  return (
    <footer className="relative z-10 overflow-hidden">
      <div className="relative flex min-h-[400px] items-center justify-center">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/rest/footer-banner-poster.webp"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/rest/footer-banner.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#1E2110]/70" />

        {/* Content */}
        <div className="relative z-10 py-16 text-center text-white">
          <h2 className="text-[32px] font-semibold md:text-[40px]">
            Luna Naturals
          </h2>

          {/* Social icons */}
          <div className="mt-8 flex justify-center gap-6">
            {/* Instagram */}
            <a href="#" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M4.89423 0.25C2.33654 0.25 0.25 2.33654 0.25 4.89423V11.6058C0.25 14.1635 2.33654 16.25 4.89423 16.25H11.6058C14.1635 16.25 16.25 14.1635 16.25 11.6058V4.89423C16.25 2.33654 14.1635 0.25 11.6058 0.25H4.89423ZM4.89423 1.48077H11.6058C13.4976 1.48077 15.0192 3 15.0192 4.89423V11.6058C15.0192 13.4976 13.5 15.0192 11.6058 15.0192H4.89423C3.0024 15.0192 1.48077 13.5 1.48077 11.6058V4.89423C1.48077 3.0024 3 1.48077 4.89423 1.48077ZM12.8654 2.71154C12.3558 2.71154 11.9423 3.125 11.9423 3.63462C11.9423 4.14423 12.3558 4.55769 12.8654 4.55769C13.375 4.55769 13.7885 4.14423 13.7885 3.63462C13.7885 3.125 13.375 2.71154 12.8654 2.71154ZM8.25 3.94231C5.8774 3.94231 3.94231 5.8774 3.94231 8.25C3.94231 10.6226 5.8774 12.5577 8.25 12.5577C10.6226 12.5577 12.5577 10.6226 12.5577 8.25C12.5577 5.8774 10.6226 3.94231 8.25 3.94231ZM8.25 5.17308C9.95673 5.17308 11.3269 6.54327 11.3269 8.25C11.3269 9.95673 9.95673 11.3269 8.25 11.3269C6.54327 11.3269 5.17308 9.95673 5.17308 8.25C5.17308 6.54327 6.54327 5.17308 8.25 5.17308Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </svg>
            </a>

            {/* Facebook */}
            <a href="#" aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="16"
                viewBox="0 0 8 16"
                fill="none"
              >
                <path
                  d="M8 5.60003H5.32067V4.00004C5.32067 3.17444 5.38451 2.65444 6.50869 2.65444H7.92855V0.11045C7.23762 0.0352499 6.5429 -0.00155 5.84741 5.00001e-05C3.78527 5.00001e-05 2.28029 1.32565 2.28029 3.75924V5.60003H0V8.80002L2.28029 8.79922V16H5.32067V8.79762L7.65112 8.79682L8 5.60003Z"
                  fill="white"
                />
              </svg>
            </a>

            {/* TikTok */}
            <a href="#" aria-label="TikTok">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="17"
                viewBox="0 0 14 17"
                fill="none"
              >
                <path
                  d="M0.101562 11.338C0.101562 8.75978 2.23389 6.62746 4.84465 6.5769V9.62658C3.9109 9.67287 3.20038 10.401 3.20038 11.338C3.20038 12.3066 3.95945 13.0519 4.93951 13.0519C5.91957 13.0519 6.67864 12.3066 6.67864 11.338V0.100098H9.7804C9.82343 0.793505 10.329 1.62368 11.0951 2.28118C11.5006 2.6292 11.9914 2.89213 12.3882 3.06769C12.587 3.15567 12.7635 3.22226 12.8959 3.26701C12.962 3.28937 13.0175 3.30645 13.0597 3.31807C13.0618 3.31866 13.0639 3.31923 13.066 3.3198V6.38517C11.9162 6.35844 10.9071 5.84838 9.92679 5.16078L9.77744 5.05604V5.23844V11.338C9.77744 13.9474 7.5933 16.1001 4.93951 16.1001C2.28573 16.1001 0.101562 13.9474 0.101562 11.338Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.2"
                />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="mt-8 text-[13px] text-white/60">
            &copy; 2026 Luna Naturals | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
