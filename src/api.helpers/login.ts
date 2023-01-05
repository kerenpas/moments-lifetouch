import { Dispatch, SetStateAction } from "react";

export function login(username: string, password: string, setResult : Dispatch<SetStateAction<string>>) {
    console.log(`login ${username}  and password ${password}`);
    let myHeaders = new Headers();
    myHeaders.append("authority", "iam.shutterfly.com");
    myHeaders.append("accept", "*/*");
    myHeaders.append("accept-language", "en-US,en;q=0.9");
    myHeaders.append("cache-control", "no-cache");
    myHeaders.append("content-type", "application/x-amz-json-1.1");
    myHeaders.append("origin", "https://accounts.shutterfly.com");
    myHeaders.append("pragma", "no-cache");
    myHeaders.append(
        "sec-ch-ua",
        "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\""
    );
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-platform", "\"macOS\"");
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("sec-fetch-mode", "cors");
    myHeaders.append("sec-fetch-site", "same-site");
    myHeaders.append(
        "user-agent",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
    );
    myHeaders.append("x-amz-target", "AWSCognitoIdentityProviderService.InitiateAuth");
    myHeaders.append("x-amz-user-agent", "aws-amplify/5.0.4 js");
    myHeaders.append("Cookie", "ak_bmsc=5DB4719CA4F0434F24F3CFB1C901EE60~000000000000000000000000000000~YAAQzbRmUlF8WBaFAQAAxA2MfBKZeVQxZZ7tVTE3AzK7KMTJ4K0QxnGazMrAHAEXfeY0sDSURkgr85TpcHmTSoZnY1BsNwc2R8Vkr/wprqbAXlqxIEuWxpPy7lBaxZmf5+y01QvzZ4O8KAzwkfzZH4Xr+CLoSPVlORYy+vbbX1Qtt+vbkZJzrPsn2o5YdDCEV0ruwp6QRKiAbQNQjNSdIUGkUnC0GG/Klb3oZqhdJBZIugiwu+cRbhME+4q2Ofh6i5a+RxTL+DRsyjKdDbO56MRh0WwfWz6UVa/SGoKBozdQYeCcnbC1KKXu8TIZAU4XbpcKdU45pgfTMIRSMvvDrv2r2TeNyt60GigHnRnERKOaZTHMH88cnK6CsceN7KVk");

    let raw = `{\"AuthFlow\":\"USER_PASSWORD_AUTH\",\"ClientId\":\"t8oiif52mece6bleeas2pof0n\",\"AuthParameters\":{\"USERNAME\":\"${username}\",\"PASSWORD\":\"${password}\"},\"ClientMetadata\":{\"brand\":\"mlt\",\"theme\":\"mlt\",\"sfly-application-name\":\"sflyssofe\",\"logged_in_device\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36\",\"sfly-transactionid\":\"63732063-3f3e-4a6d-bcb2-dfa351499eca\",\"is_test_account\":\"false\",\"is_internal_account\":\"false\",\"send_welcome_email\":\"true\",\"welcome_email_brand_id\":\"mlt\",\"domain_origin\":\"accounts.shutterfly.com\"}}`;

    let requestOptions: RequestInit = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch("https://iam.shutterfly.com/", requestOptions)
        .then((response) => {
                response.json().then((data) => {
                    console.log(`typeof data.AuthenticationResult is ${typeof data.AuthenticationResult}`)
                    console.log(typeof data.AuthenticationResult != undefined)
                    console.log(`typeof data.AuthenticationResult === undefined :${typeof data.AuthenticationResult === undefined}`)
                    if (typeof data.AuthenticationResult === "undefined") {
                        setResult(data.message)
                    }else{
                        console.log(JSON.stringify(data))
                        console.log(JSON.stringify(data.AuthenticationResult.IdToken))
                        // window.$IdToken = data.AuthenticationResult.IdToken
                        setResult("login sucess")
                    }
                })
            }
        ).catch((error) => {
        console.log("error", error);
        setResult("login sucess");
    });
}