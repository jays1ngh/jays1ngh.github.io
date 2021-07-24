---
layout: post
author: jays1ngh
categories: AzureAD
date: 2021-06-22
thumbnail: /assets/img/posts/how-to-add-post-excerpts.png
image: /assets/img/posts/how-to-add-post-excerpts.png
---
When I try to reset password for a local user in Azure AD then I see the below error:

>### We could not change your password
>
>We're sorry, but we cannot change your password at this time. Unfortunately, this is due to an unrecoverable issue with your account configuration, so trying again won't work.
>
>Please contact your admin to change your password for you.

I started researching the issue and took a measured aproach to narrow down the root cause. Then I looked at this [document from Microsoft](https://docs.microsoft.com/en-us/azure/active-directory/authentication/tutorial-enable-sspr-writeback). Obviously, I did not follow this as I originally thought checking the box while setting up Azure AD Connect will do the rest for me.

![Azure AD Password Writeback Check Box](/assets/img/2021-06-22-reset-local-account-password-in-azure-ad/Azure-AD-Password-Writeback-Check-Box.png)

## Root cause

I never bothered checking "Password writeback" documentation, as mentioned earlier, because one would think checking a box during Azure AD Connect will do something behind the scenes to make password writeback feature work. However, that was not the case.

I dug deeper and uncovered the cause. Azure AD Connect created a user account during its configuration. Apparently, that account needs the following permissions:
- Change password
- Reset password

Without wasting any further time, I fixed the permissions of that user object which Azure AD Connect app created. I disabled password Write Back and enabled back again. Tested on of the on-prem users password reset and it worked.
