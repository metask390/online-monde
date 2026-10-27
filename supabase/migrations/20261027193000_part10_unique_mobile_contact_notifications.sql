-- ONLINE MANDI - PART 10: UNIQUE MOBILE & CONTACT NOTIFICATIONS
-- Run this migration against the intended Supabase project.
DELETE FROM public.user_contact_info a USING public.user_contact_info b
WHERE a.ctid < b.ctid AND a.phone = b.phone AND a.phone IS NOT NULL;

ALTER TABLE public.user_contact_info DROP CONSTRAINT IF EXISTS unique_phone_number;
ALTER TABLE public.user_contact_info ADD CONSTRAINT unique_phone_number UNIQUE (phone);

ALTER TABLE public.admin_contact_requests ADD COLUMN IF NOT EXISTS admin_reply text;

CREATE OR REPLACE FUNCTION public.notify_user_on_admin_reply()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  IF NEW.admin_reply IS NOT NULL AND OLD.admin_reply IS DISTINCT FROM NEW.admin_reply THEN
    INSERT INTO public.notifications (user_id, type, title, body, link)
    VALUES (
      NEW.user_id,
      'admin_reply',
      'ایڈمن کا جواب',
      'آپ کی درخواست کا جواب موصول ہو گیا ہے: ' || NEW.admin_reply,
      '/notifications'
    );
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_admin_reply ON public.admin_contact_requests;
CREATE TRIGGER on_admin_reply
AFTER UPDATE ON public.admin_contact_requests
FOR EACH ROW EXECUTE FUNCTION public.notify_user_on_admin_reply();
