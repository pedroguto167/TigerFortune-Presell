jQuery(document).ready((function(s){var i;function n(i){void 0!==i.pms_paygates_wrapper&&i.find("#pms-paygates-wrapper").replaceWith(i.pms_paygates_wrapper),"unedfined"!=typeof $pms_checked_paygate&&"credit_card"==$pms_checked_paygate.data("type")&&i.find(".pms-credit-card-information").show(),void 0!==i.pms_billing_details&&(i.find(".pms-billing-details").replaceWith(i.pms_billing_details),"undefined"!=typeof PMS_ChosenStrings&&null!=s.fn.chosen&&(i.find("#pms_billing_country").chosen(PMS_ChosenStrings),s("#pms_billing_state option").length>0&&i.find("#pms_billing_state").chosen(PMS_ChosenStrings)))}function e(i){if(i){var n="#pms-subscription-plans-discount";if(function(s){if("undefined"==typeof pms_discount_object||void 0===pms_discount_object.discounted_subscriptions)return!0;let i=!1,n=JSON.parse(pms_discount_object.discounted_subscriptions);for(var e in n)s==n[e]&&(i=!0);return i}(i.val()))if("0"==i.attr("data-price")){if(s.isFunction(s.pms_plan_is_prorated)&&s.pms_plan_is_prorated(i)&&(s('input[name="pms_recurring"]',s(".pms-subscription-plan-auto-renew")).prop("checked")||2==i.data("recurring")))return void s(n).show();s.isFunction(s.pms_plan_has_signup_fee)&&s.pms_plan_has_signup_fee(i)&&s(n).show(),s(n).hide()}else s(n).show();else s(n).hide()}}e(s("input[name=subscription_plans][type=radio]").length>0?s("input[name=subscription_plans][type=radio]:checked"):s("input[name=subscription_plans][type=hidden]")),s(document).on("click",'.pms-subscription-plan input[type="radio"][name="subscription_plans"]',(function(){s(this).attr("data-price")>0&&s("#pms_subscription_plans_discount_code").length>0?s("#pms-apply-discount").trigger("click"):(s("#pms-subscription-plans-discount-messages-wrapper").hide(),s("#pms-subscription-plans-discount-messages").hide()),e(s(this))})),s(document).on("click",'.pms-subscription-plan-auto-renew input[type="checkbox"][name="pms_recurring"]',(function(){s("#pms_subscription_plans_discount_code").length>0?s("#pms-apply-discount").trigger("click"):(s("#pms-subscription-plans-discount-messages-wrapper").hide(),s("#pms-subscription-plans-discount-messages").hide()),e(s($pms_checked_subscription))})),s(document).on("wppbAddRequiredAttributeEvent",(function(i){s(i.target).is("#pms_subscription_plans_discount_code")&&e(s("input[name=subscription_plans][type=radio]").length>0?s("input[name=subscription_plans][type=radio]:checked"):s("input[name=subscription_plans][type=hidden]"))})),s("#pms-apply-discount").click((function(e){e.preventDefault(),"undefined"==typeof $pms_form&&($pms_form=s(this).closest("form"));var p="";if(s('.pms-subscription-plan input[type="radio"]').each((function(){s(this).is(":checked")&&(p=s(this))})),""==p&&(p=s("input[type=hidden][name=subscription_plans]")),""==s("#pms_subscription_plans_discount_code").val())return s("#pms-subscription-plans-discount-messages-wrapper").fadeOut(350),s("#pms-subscription-plans-discount-messages").fadeOut(350),p.data("discounted-price",!1),jQuery(document).trigger("pms_discount_error"),!1;i=s("#pms_subscription_plans_discount_code").val(),pwyw_price="",0!=s('input[name="subscription_price_'+p.val()+'"]').length&&(pwyw_price=s('input[name="subscription_price_'+p.val()+'"]').val());var t={action:"pms_discount_code",code:s.trim(s("#pms_subscription_plans_discount_code").val()),subscription:p.val(),recurring:s('input[name="pms_recurring"]:checked').val(),pwyw_price:pwyw_price,pmstkn_original:$pms_form.find('input[name="pmstkn"]').val(),pms_current_subscription:$pms_form.find('input[name="pms_current_subscription"]').val(),form_action:$pms_form.find('input[name="form_action"]').val()};void 0===t.pmstkn_original&&jQuery(".wppb-register-user").length>0&&(t.pmstkn_original="pb_form"),""!==t.code?(s("#pms-subscription-plans-discount-messages").hide(),s("#pms-subscription-plans-discount-messages-wrapper").show(),s("#pms-subscription-plans-discount-messages-loading").fadeIn(350),jQuery.post(pms_discount_object.ajax_url,t,(function(i){null!=i.success&&(s("#pms-subscription-plans-discount-messages").removeClass("pms-discount-error"),s("#pms-subscription-plans-discount-messages").addClass("pms-discount-success"),s("#pms-subscription-plans-discount-messages-loading").fadeOut(350,(function(){s("#pms-subscription-plans-discount-messages").html(i.success.message).fadeIn(350)})),i.is_full_discount?function(i){void 0===i.pms_paygates_wrapper&&(i.pms_paygates_wrapper=i.find("#pms-paygates-wrapper").clone());i.find("#pms-paygates-wrapper").replaceWith('<span id="pms-paygates-wrapper">'),i.find(".pms-credit-card-information").hide(),void 0===i.pms_billing_details&&("undefined"!=typeof PMS_ChosenStrings&&null!=s.fn.chosen&&(i.find("#pms_billing_country").chosen("destroy"),i.find("#pms_billing_state").chosen("destroy")),i.pms_billing_details=i.find(".pms-billing-details").clone());i.find(".pms-billing-details").replaceWith('<span class="pms-billing-details">')}($pms_form):n($pms_form),p.data("price-original",p.data("price")),p.data("price",i.discounted_price),p.data("discounted-price",!0),p.data("discounted-price-value",i.original_discounted_price),1==i.is_full_discount?(1==i.recurring_payments&&$pms_auto_renew_field.hide(),p.data("is-full-discount",!0)):p.data("is-full-discount",!1),p.data("discount-recurring-payments",i.recurring_payments),jQuery(document).trigger("pms_discount_success")),null!=i.error&&(s("#pms-subscription-plans-discount-messages").removeClass("pms-discount-success"),s("#pms-subscription-plans-discount-messages").addClass("pms-discount-error"),s("#pms-subscription-plans-discount-messages-loading").fadeOut(350,(function(){s("#pms-subscription-plans-discount-messages").html(i.error.message).fadeIn(350)})),n($pms_form),p.data("price",p.data("price-original")),p.data("discounted-price",!1),p.data("discounted-price-value",0),jQuery(document).trigger("pms_discount_error"))}))):(p.data("price",p.data("price-original")),p.data("discounted-price",!1),jQuery(document).trigger("pms_discount_error"))})),""!=s("input[name=discount_code]").val()&&s("#pms-apply-discount").trigger("click"),s("input[name=discount_code]").on("blur",(function(){i!=s("input[name=discount_code]").val()&&s("#pms-apply-discount").trigger("click"),""==s("input[name=discount_code]").val()&&n($pms_form)}))}));