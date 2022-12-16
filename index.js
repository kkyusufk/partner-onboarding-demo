/**
 * Partner Onboarding Class 
 */
 class PartnerOnboarding {
  #iFrame = null
  constructor({ partnerId, successCallback }) {
    this.partnerId = partnerId;
    this.data = {
      status: '',
      mId: '',
      section: ''
    };
    this.url = 'http://localhost:8000/phantom/onboarding/';
    this.success = (status) => successCallback(status);
  }

  start = () => {
    this.renderIframeWithOverlay();

    window.onmessage = (e) => {
      this.data = {
        ...this.data.status,
        ...e.data,
      }
    };

    return new Promise((resolve, reject) => {
      resolve(this.data);
      reject({
        onboardingStatus: this.status
      })
    });
  }

  /**
   * creates an iFrame 
   * @returns HTMLIframeElement
   */
  #createIframe() {
    const iframe = document.createElement('iframe');
    iframe.src=`${this.url}?partnerId=${this.partnerId}`;
    iframe.className = "razorpay-onboarding-iframe";
    iframe.width = '700';
    iframe.height = '700';
    this.iframe = iframe;
    return iframe;
  }

  #createCloseButton = () => {
    const button = document.createElement('button');
    button.innerHTML = 'close';
    button.onclick = () => {
      console.log(this);
      this.success(this.data);
      this.iframe.style.display = "none";
      document.body.removeChild(button);
    }
    return button;
  }

  #createOverlay = () => {
    const overlay = document.createElement('div');
    overlay.className = 'razorpay-onboarding-overlay';
    overlay.style.position = 'fixed';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgb(0,0,0,0.5)';
    return overlay;
  }

  renderIframeWithOverlay() {
    const overlay = this.#createOverlay();
    overlay.append(this.#createIframe());
    overlay.append(this.#createCloseButton());

    document.body.append(overlay);
  }

  getiFrame() {
    return this.iFrame;
  }
}

window.partnerOnboarding = PartnerOnboarding;

export default PartnerOnboarding;