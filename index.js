/**
 * Partner Onboarding Class 
 */
 class PartnerOnboarding {
  #iFrame = null
  constructor({ partnerId, successCallback }) {
    this.partnerId = partnerId;
    this.data = {
      status: '',
      mId: ''
    };
    this.url = 'http://localhost:8000/phantom/onboarding/';
    this.success = (status) => successCallback(status);
  }

  start = () => {
    document.body.append(this.#createIframe());
    document.body.append(this.#createCloseButton());

    window.onmessage = (e) => {
      this.data.status = e.data.status;
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
      this.success(this.data.status);
      this.iframe.style.display = "none";
      document.body.removeChild(button);
    }
    return button;
  }

  getiFrame() {
    return this.iFrame;
  }
}

window.partnerOnboarding = PartnerOnboarding;

export default PartnerOnboarding;