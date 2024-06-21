import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Container.module.css';
import { ContainerIcon } from './ContainerIcon';
import { SvgIcon } from './SvgIcon';
import { SvgIcon2 } from './SvgIcon2';
import { SvgIcon3 } from './SvgIcon3';
import { SvgIcon4 } from './SvgIcon4';

interface Props {
  className?: string;
}
/* @figmaId 1:4 */
export const Container: FC<Props> = memo(function Container(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.main}>
        <div className={classes.container}>
          <div className={classes.container2}>
            <div className={classes.container3}>
              <div className={classes.container4}>
                <div className={classes.heading1}>
                  <div className={classes.identification}>Identification</div>
                </div>
                <div className={classes.mdsProgressBar}>
                  <div className={classes.container5}>
                    <div className={classes._20}>20</div>
                  </div>
                  <div className={classes.backgroundBorder}></div>
                  <div className={classes.verticalBorder}></div>
                  <div className={classes.backgroundBorder2}></div>
                </div>
              </div>
            </div>
            <div className={classes.container6}>
              <div className={classes.container7}>
                <div className={classes.container8}>
                  <div className={classes.container9}>
                    <div className={classes.container10}>
                      <div className={classes.container11}>
                        <div className={classes.icon}>
                          <ContainerIcon className={classes.icon2} />
                        </div>
                      </div>
                    </div>
                    <div className={classes.questions}>Questions?</div>
                  </div>
                  <div className={classes.container12}>
                    <div className={classes.mdsLinkLink}>
                      <div className={classes.readOurFAQs}>Read our FAQs.</div>
                      <div className={classes.container13}>
                        <div className={classes.sVG}>
                          <SvgIcon className={classes.icon3} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.container14}>
                  <div className={classes.container15}></div>
                  <div className={classes.container16}></div>
                  <div className={classes.container17}>
                    <div className={classes.heading2}>
                      <div className={classes.letSConfirmYourIdentity}>Let&#39;s confirm your identity.</div>
                    </div>
                    <div className={classes.heading3}>
                      <div className={classes.toProtectYourAccountPleaseTell}>
                        To protect your account, please tell us the requested info so we can confirm your identity. If
                        you have more
                      </div>
                      <div className={classes.thanOneAccountChooseOneAndWeLl}>
                        than one account, choose one and we&#39;ll take care of the rest.
                      </div>
                      <div className={classes.commercialAdministratorsMustTe}>
                        Commercial administrators must tell us a Tax ID number.
                      </div>
                    </div>
                    <div className={classes.container18}>
                      <div className={classes.container19}>
                        <div className={classes.required}>
                          <div className={classes.container20}>
                            <div className={classes.labelSocialSecurityNumberOrTax}>
                              Social Security number or Tax ID (TIN)
                            </div>
                          </div>
                          <div className={classes.container21}>
                            <div className={classes.input}></div>
                            <div className={classes.mdsButton}>
                              <div className={classes.button}>
                                <div className={classes.show}>Show</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={classes.required2}>
                          <div className={classes.container22}>
                            <div className={classes.labelAccountCardOrApplicationN}>
                              Account, card or application number
                            </div>
                          </div>
                          <div className={classes.container23}>
                            <div className={classes.input2}></div>
                            <div className={classes.mdsButton2}>
                              <div className={classes.button2}>
                                <div className={classes.show2}>Show</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={classes.container24}>
                        <div className={classes.mdsLink}>
                          <div className={classes.link}>
                            <div className={classes.donTHaveASocialSecurityNumber}>
                              Don&#39;t have a Social Security number?
                            </div>
                            <div className={classes.container25}>
                              <div className={classes.sVG2}>
                                <SvgIcon2 className={classes.icon4} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={classes.container26}>
                        <div className={classes.mdsLink2}>
                          <div className={classes.link2}>
                            <div className={classes.areYouAnAuthorizedUserOnAnothe}>
                              Are you an authorized user on another account?
                            </div>
                            <div className={classes.container27}>
                              <div className={classes.sVG3}>
                                <SvgIcon3 className={classes.icon5} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={classes.container28}>
                        <button className={classes.mdsButtonButton}>
                          <div className={classes.next}>Next</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.headerMdsBrandBar}>
        <div className={classes.container29}>
          <div className={classes.container30}>
            <div className={classes.container31}>
              <div className={classes.container32}>
                <div className={classes.mdsButton3}>
                  <div className={classes.button3}>
                    <div className={classes.margin}>
                      <div className={classes.container33}>
                        <div className={classes.container34}>
                          <div className={classes.sVG4}>
                            <SvgIcon4 className={classes.icon6} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.container35}>
                      <div className={classes.exit}>Exit</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.container36}>
                <div className={classes.link3}>
                  <div className={classes.octogonWhitePng}></div>
                </div>
              </div>
              <div className={classes.container37}>
                <div className={classes.container38}>
                  <div className={classes.mdsButton4}>
                    <div className={classes.button4}>
                      <div className={classes.espanol}>Español</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
