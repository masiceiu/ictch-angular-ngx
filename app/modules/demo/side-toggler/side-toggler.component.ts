import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-toggler',
  templateUrl: './side-toggler.component.html',
  styleUrls: ['./side-toggler.component.css']
})
export class SideTogglerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
/*
  (function() {
    var ConsentBanner = (function() {
        var analyticsContainer = document.getElementById("analyticsContainer");
        var allowConsent = document.getElementById("analyticsAllowConsent");
        var denyConsent = document.getElementById("analyticsDenyConsent");
        var cpsession = window.location.pathname.split("/")[1];
        var request = new XMLHttpRequest();
        var cpanelAPICallPrefix = "/execute/NVData/set?names=analytics&analytics=";
        var whmAPICallPrefix = "/json-api/nvset?api.version=1&key=analytics&value=";
        var webmailAPICallPrefix = "/json-api/cpanel?cpanel_jsonapi_module=NVData&cpanel_jsonapi_func=set&cpanel_jsonapi_apiversion=2&names=analytics&analytics=";
        var isWHM = false;
        var isCpanel = false;
        var isWebmail = false;

        var currentSetting; // Should only ever be undef, "on", or "off"

        function updateSettings(setting) {
            if (setting === "off") {
                denyConsent.checked = true;
                currentSetting = setting;
            }
            else if (setting === "on") {
                allowConsent.checked = true;
                currentSetting = setting;
            }
            else {
                denyConsent.checked = true;
            }
        }

        function approve() {
            toggleDialog(true);
            saveConsent(true);
        }

        function deny() {
            toggleDialog(true);
            saveConsent(false);
        }

        function getConnectPrefix() {
            var prefix = "";
            if (isWHM) {
                prefix = whmAPICallPrefix;
            }
            if (isCpanel) {
                prefix = cpanelAPICallPrefix;
            }
            if (isWebmail) {
                prefix = webmailAPICallPrefix;
            }
            return prefix;
        }

        function handleCpanelResult(result) {
            return result && result.status == 1;
        }

        function handleWHMResult(result) {
            return result && result.metadata.result == 1;
        }

        function handleWebmailResult(result) {
            return result && result.cpanelresult.event.result == 1;
        }

        function parseAPIStatus(result) {
            if (isWHM) {
                return handleWHMResult(result);
            }
            if (isCpanel) {
                return handleCpanelResult(result);
            }
            if (isWebmail) {
                return handleWebmailResult(result);
            }
            return false;
        }


        function saveConsent (consent) {
            var newValue = consent ? "on" : "off";
            request.open("GET", "/" + cpsession + getConnectPrefix() + newValue);
            request.onload = function () {
                if (request.status >= 200 && request.status < 400) {
                    var result;
                    try {
                        result = JSON.parse(request.responseText);
                    } catch (e) {
                    }

                    // IE requires that we clear these manually
                    analyticsContainer.style.transitionDelay = "";

                    analyticsContainer.className = "peek";

                    var results = parseAPIStatus(result);
                    if (results) {
                        updateSettings(newValue);
                    }
                }
            };
            request.send();
        }

        function toggleDialog (addDelay) {
            if (addDelay) {
                analyticsContainer.style = "transition-delay: .5s;";
            }

            if (analyticsContainer.className.indexOf("shown") === -1 ) {
                analyticsContainer.className = "shown";
            } else {
                analyticsContainer.className = "peek";

                if(!currentSetting) {
                    saveConsent(false);
                }
            }
        }

        function initialize (opts) {
            if (opts.isWHM) {
                isWHM = opts.isWHM;
            }

            if (opts.isCpanel) {
                isCpanel = opts.isCpanel;
            }

            if (opts.isWebmail) {
                isWebmail = opts.isWebmail;
            }

            // IE requires that we clear these manually
            analyticsContainer.style.transitionDelay = "";

            if(opts.currentSetting === "on" || opts.currentSetting === "off") {
                analyticsContainer.className = "peek";
                updateSettings(opts.currentSetting);
            }
            else {
                updateSettings(); // Treat any invalid values as non-existent
                toggleDialog();
            }
        }

        return {
            initialize: initialize,
            toggle: toggleDialog,
            approve: approve,
            deny: deny
        };
    })();

    window.AnalyticsConsentBanner = ConsentBanner;

    setTimeout(function() {
        ConsentBanner.initialize({
            "currentSetting": "on",
            "isCpanel": true
        });
    }, 2000);
})();*/
}