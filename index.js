/**
 * Partner Onboarding Class 
 */
 class PartnerOnboarding {
  #iFrame = null
  #overlay = null
  constructor({ partnerId, successCallback }) {
    this.partnerId = partnerId;
    this.data = {
      status: 'Onboarding Not Started',
      mid: null,
      section: 'Welcome Screen'
    };
    this.url = 'http://localhost:8000/phantom/onboarding/';
    this.success = (status) => successCallback(status);
  }

  start = () => {
    this.renderIframeWithOverlay();

    window.onmessage = (e) => {
      this.data = {
        status: e.data.status,
        mid: e.data.mid,
        section: e.data.section
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
    iframe.src=`${this.url}`;
    iframe.className = "razorpay-onboarding-iframe";
    iframe.width = '90%';
    iframe.height = '90%';
    this.iframe = iframe;
    return iframe;
  }

  #createCloseButton = () => {
    const button = document.createElement('button');
    button.innerHTML = 'close';
    button.style.position = 'absolute';
    button.style.top = 0;
    button.style.right = 10;
    button.style.top
    button.onclick = () => {
      console.log(this);
      this.success(this.data);
      document.body.removeChild(this.#overlay);
    }
    return button;
  }

  #createOverlay = () => {
    const overlay = document.createElement('div');
    this.#overlay = overlay;
    overlay.className = 'razorpay-onboarding-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgb(0,0,0,0.5)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
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