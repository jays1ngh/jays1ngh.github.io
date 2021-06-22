---
layout: post
author: jays1ngh
categories: AzureAD
date: 2021-06-22
thumbnail:
---
When I try to reset password for a local user in Azure AD then I see the below error:

>## We could not change your password
>
>We're sorry, but we cannot change your password at this time. Unfortunately, this is due to an unrecoverable issue with your account configuration, so trying again won't work.
>
>Please contact your admin to change your password for you.

I started researching the issue and took a measured aproach to narrow down the root cause. Then I looked at this [document from Microsoft](https://docs.microsoft.com/en-us/azure/active-directory/authentication/tutorial-enable-sspr-writeback). Obviusly, I did not follow this as I originally thought checking the box while setting up Azure AD Connect will do the rest for me.

![Azure AD Password Writeback Check Box](/assets/img/2021-06-22-reset-local-account-password-in-azure-ad/Azure AD Password Writeback Check Box.png)
