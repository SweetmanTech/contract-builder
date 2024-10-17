create schema if not exists "mesa";

create type "mesa"."invitation_status" as enum ('open', 'closed', 'accepted', 'rejected');

create type "mesa"."project_contract_type" as enum ('master', 'songwriting');

create type "mesa"."project_event_type" as enum ('mesa.project.create', 'mesa.project.invite', 'mesa.project.meta.update', 'mesa.project.update');

create type "mesa"."project_user_role" as enum ('owner', 'producer', 'songwriter', 'artist', 'manager', 'label', 'publisher', 'lawyer');

create table "mesa"."project_events" (
    "id" uuid not null default gen_random_uuid(),
    "type" mesa.project_event_type not null,
    "project_id" uuid not null,
    "user_id" uuid not null,
    "payload" jsonb,
    "attestation" jsonb not null,
    "attestation_meta" jsonb not null,
    "attestation_uid" text generated always as (TRIM(BOTH '"'::text FROM ((attestation -> 'uid'::text))::text)) stored,
    "created_by" uuid,
    "created_at" timestamp with time zone not null default CURRENT_TIMESTAMP,
    "updated_at" timestamp with time zone not null default CURRENT_TIMESTAMP
);


alter table "mesa"."project_events" enable row level security;

create table "mesa"."project_invitations" (
    "id" uuid not null default gen_random_uuid(),
    "project_id" uuid,
    "user_id" uuid,
    "user_role" mesa.project_user_role default 'owner'::mesa.project_user_role,
    "created_by" uuid,
    "created_at" timestamp with time zone default CURRENT_TIMESTAMP,
    "updated_at" timestamp with time zone default CURRENT_TIMESTAMP,
    "status" mesa.invitation_status default 'open'::mesa.invitation_status,
    "user_name" character varying(255),
    "user_bps" mesa.bps default 0,
    "contract_type" mesa.project_contract_type default 'master'::mesa.project_contract_type,
    "description" text,
    "user_email" character varying(255) not null
);


alter table "mesa"."project_invitations" enable row level security;

create table "mesa"."project_uploads" (
    "id" uuid not null default gen_random_uuid(),
    "upload_id" uuid,
    "project_id" uuid,
    "user_id" uuid,
    "created_at" timestamp with time zone not null default now()
);


create table "mesa"."project_users" (
    "project_id" uuid not null,
    "user_id" uuid not null,
    "user_role" mesa.project_user_role default 'owner'::mesa.project_user_role,
    "user_name" character varying(255),
    "user_bps" mesa.bps default 0,
    "invitation_id" uuid not null,
    "created_by" uuid,
    "created_at" timestamp with time zone default CURRENT_TIMESTAMP,
    "updated_at" timestamp with time zone default CURRENT_TIMESTAMP,
    "contract_type" mesa.project_contract_type default 'master'::mesa.project_contract_type,
    "user_email" character varying(255)
);


alter table "mesa"."project_users" enable row level security;

create table "mesa"."projects" (
    "id" uuid not null default gen_random_uuid(),
    "title" mesa.title not null,
    "description" text,
    "created_by" uuid,
    "created_at" timestamp with time zone default CURRENT_TIMESTAMP,
    "updated_at" timestamp with time zone default CURRENT_TIMESTAMP
);


alter table "mesa"."projects" enable row level security;

create table "mesa"."uploads" (
    "id" uuid not null default gen_random_uuid(),
    "type" text default ''::text,
    "name" text default ''::text,
    "url" text default ''::text,
    "created_at" timestamp with time zone not null default now()
);


CREATE UNIQUE INDEX project_events_pkey ON mesa.project_events USING btree (id);

CREATE UNIQUE INDEX project_invitations_pkey ON mesa.project_invitations USING btree (id);

CREATE INDEX project_invitations_project_id_idx ON mesa.project_invitations USING btree (project_id);

CREATE INDEX project_invitations_user_id_idx ON mesa.project_invitations USING btree (user_id);

CREATE UNIQUE INDEX project_users_pkey ON mesa.project_users USING btree (project_id, user_id);

CREATE UNIQUE INDEX projects_pkey ON mesa.projects USING btree (id);

CREATE UNIQUE INDEX unique_attestation_uid ON mesa.project_events USING btree (attestation_uid);

CREATE UNIQUE INDEX uploads_pkey ON mesa.uploads USING btree (id);

alter table "mesa"."project_events" add constraint "project_events_pkey" PRIMARY KEY using index "project_events_pkey";

alter table "mesa"."project_invitations" add constraint "project_invitations_pkey" PRIMARY KEY using index "project_invitations_pkey";

alter table "mesa"."project_users" add constraint "project_users_pkey" PRIMARY KEY using index "project_users_pkey";

alter table "mesa"."projects" add constraint "projects_pkey" PRIMARY KEY using index "projects_pkey";

alter table "mesa"."uploads" add constraint "uploads_pkey" PRIMARY KEY using index "uploads_pkey";

alter table "mesa"."project_events" add constraint "project_events_created_by_fkey" FOREIGN KEY (created_by) REFERENCES auth.users(id) not valid;

alter table "mesa"."project_events" validate constraint "project_events_created_by_fkey";

alter table "mesa"."project_events" add constraint "project_events_project_id_fkey" FOREIGN KEY (project_id) REFERENCES mesa.projects(id) ON DELETE CASCADE not valid;

alter table "mesa"."project_events" validate constraint "project_events_project_id_fkey";

alter table "mesa"."project_events" add constraint "project_events_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) not valid;

alter table "mesa"."project_events" validate constraint "project_events_user_id_fkey";

alter table "mesa"."project_events" add constraint "unique_attestation_uid" UNIQUE using index "unique_attestation_uid";

alter table "mesa"."project_invitations" add constraint "project_invitations_created_by_fkey" FOREIGN KEY (created_by) REFERENCES auth.users(id) not valid;

alter table "mesa"."project_invitations" validate constraint "project_invitations_created_by_fkey";

alter table "mesa"."project_invitations" add constraint "project_invitations_project_id_fkey" FOREIGN KEY (project_id) REFERENCES mesa.projects(id) ON DELETE CASCADE not valid;

alter table "mesa"."project_invitations" validate constraint "project_invitations_project_id_fkey";

alter table "mesa"."project_invitations" add constraint "project_invitations_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "mesa"."project_invitations" validate constraint "project_invitations_user_id_fkey";

alter table "mesa"."project_uploads" add constraint "mesa_project_uploads_project_id_fkey" FOREIGN KEY (project_id) REFERENCES mesa.projects(id) not valid;

alter table "mesa"."project_uploads" validate constraint "mesa_project_uploads_project_id_fkey";

alter table "mesa"."project_uploads" add constraint "mesa_project_uploads_upload_id_fkey" FOREIGN KEY (upload_id) REFERENCES mesa.uploads(id) not valid;

alter table "mesa"."project_uploads" validate constraint "mesa_project_uploads_upload_id_fkey";

alter table "mesa"."project_uploads" add constraint "mesa_project_uploads_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) not valid;

alter table "mesa"."project_uploads" validate constraint "mesa_project_uploads_user_id_fkey";

alter table "mesa"."project_users" add constraint "project_users_created_by_fkey" FOREIGN KEY (created_by) REFERENCES auth.users(id) not valid;

alter table "mesa"."project_users" validate constraint "project_users_created_by_fkey";

alter table "mesa"."project_users" add constraint "project_users_invitation_id_fkey" FOREIGN KEY (invitation_id) REFERENCES mesa.project_invitations(id) not valid;

alter table "mesa"."project_users" validate constraint "project_users_invitation_id_fkey";

alter table "mesa"."project_users" add constraint "project_users_project_id_fkey" FOREIGN KEY (project_id) REFERENCES mesa.projects(id) ON DELETE CASCADE not valid;

alter table "mesa"."project_users" validate constraint "project_users_project_id_fkey";

alter table "mesa"."project_users" add constraint "project_users_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "mesa"."project_users" validate constraint "project_users_user_id_fkey";

alter table "mesa"."projects" add constraint "projects_created_by_fkey" FOREIGN KEY (created_by) REFERENCES auth.users(id) not valid;

alter table "mesa"."projects" validate constraint "projects_created_by_fkey";

grant insert on table "mesa"."project_events" to "authenticated";

grant select on table "mesa"."project_events" to "authenticated";

grant delete on table "mesa"."project_events" to "service_role";

grant insert on table "mesa"."project_events" to "service_role";

grant references on table "mesa"."project_events" to "service_role";

grant select on table "mesa"."project_events" to "service_role";

grant trigger on table "mesa"."project_events" to "service_role";

grant truncate on table "mesa"."project_events" to "service_role";

grant update on table "mesa"."project_events" to "service_role";

grant delete on table "mesa"."project_invitations" to "authenticated";

grant insert on table "mesa"."project_invitations" to "authenticated";

grant select on table "mesa"."project_invitations" to "authenticated";

grant update on table "mesa"."project_invitations" to "authenticated";

grant delete on table "mesa"."project_invitations" to "service_role";

grant insert on table "mesa"."project_invitations" to "service_role";

grant references on table "mesa"."project_invitations" to "service_role";

grant select on table "mesa"."project_invitations" to "service_role";

grant trigger on table "mesa"."project_invitations" to "service_role";

grant truncate on table "mesa"."project_invitations" to "service_role";

grant update on table "mesa"."project_invitations" to "service_role";

grant delete on table "mesa"."project_uploads" to "authenticated";

grant insert on table "mesa"."project_uploads" to "authenticated";

grant select on table "mesa"."project_uploads" to "authenticated";

grant update on table "mesa"."project_uploads" to "authenticated";

grant delete on table "mesa"."project_uploads" to "service_role";

grant insert on table "mesa"."project_uploads" to "service_role";

grant references on table "mesa"."project_uploads" to "service_role";

grant select on table "mesa"."project_uploads" to "service_role";

grant trigger on table "mesa"."project_uploads" to "service_role";

grant truncate on table "mesa"."project_uploads" to "service_role";

grant update on table "mesa"."project_uploads" to "service_role";

grant delete on table "mesa"."project_users" to "authenticated";

grant insert on table "mesa"."project_users" to "authenticated";

grant select on table "mesa"."project_users" to "authenticated";

grant update on table "mesa"."project_users" to "authenticated";

grant delete on table "mesa"."project_users" to "service_role";

grant insert on table "mesa"."project_users" to "service_role";

grant references on table "mesa"."project_users" to "service_role";

grant select on table "mesa"."project_users" to "service_role";

grant trigger on table "mesa"."project_users" to "service_role";

grant truncate on table "mesa"."project_users" to "service_role";

grant update on table "mesa"."project_users" to "service_role";

grant delete on table "mesa"."projects" to "authenticated";

grant insert on table "mesa"."projects" to "authenticated";

grant select on table "mesa"."projects" to "authenticated";

grant update on table "mesa"."projects" to "authenticated";

grant delete on table "mesa"."projects" to "service_role";

grant insert on table "mesa"."projects" to "service_role";

grant references on table "mesa"."projects" to "service_role";

grant select on table "mesa"."projects" to "service_role";

grant trigger on table "mesa"."projects" to "service_role";

grant truncate on table "mesa"."projects" to "service_role";

grant update on table "mesa"."projects" to "service_role";

grant insert on table "mesa"."uploads" to "authenticated";

grant select on table "mesa"."uploads" to "authenticated";

grant delete on table "mesa"."uploads" to "service_role";

grant insert on table "mesa"."uploads" to "service_role";

grant references on table "mesa"."uploads" to "service_role";

grant select on table "mesa"."uploads" to "service_role";

grant trigger on table "mesa"."uploads" to "service_role";

grant truncate on table "mesa"."uploads" to "service_role";

grant update on table "mesa"."uploads" to "service_role";

create policy "authenticated_insert_own_project_events"
on "mesa"."project_events"
as permissive
for insert
to authenticated
with check (true);


create policy "authenticated_select_own_project_events"
on "mesa"."project_events"
as permissive
for select
to authenticated
using (true);


create policy "authenticated_manage_own_invitation"
on "mesa"."project_invitations"
as permissive
for update
to authenticated
using (((status = 'open'::mesa.invitation_status) AND (user_id = ( SELECT auth.uid() AS uid))))
with check (((status = ANY (ARRAY['accepted'::mesa.invitation_status, 'rejected'::mesa.invitation_status])) AND (user_id = ( SELECT auth.uid() AS uid))));


create policy "authenticated_manage_own_project_invitations"
on "mesa"."project_invitations"
as permissive
for update
to authenticated
using (((status = 'open'::mesa.invitation_status) AND private.mesa_check_project_user_role(project_id, ( SELECT auth.uid() AS uid), 'owner'::mesa.project_user_role)))
with check (((status = ANY (ARRAY['closed'::mesa.invitation_status, 'open'::mesa.invitation_status])) AND private.mesa_check_project_user_role(project_id, ( SELECT auth.uid() AS uid), 'owner'::mesa.project_user_role)));


create policy "Enable read access for all users"
on "mesa"."project_users"
as permissive
for select
to public
using (true);


create policy "Enable update for users based on email"
on "mesa"."project_users"
as permissive
for update
to public
using (true)
with check (true);


create policy "authenticated_delete_own_project_users"
on "mesa"."project_users"
as permissive
for delete
to authenticated
using (private.mesa_check_project_user_role(project_id, ( SELECT auth.uid() AS uid), 'owner'::mesa.project_user_role));


create policy "authenticated_delete_own_project"
on "mesa"."projects"
as permissive
for delete
to authenticated
using (private.mesa_check_project_user_role(id, ( SELECT auth.uid() AS uid), 'owner'::mesa.project_user_role));


create policy "authenticated_insert_new_project"
on "mesa"."projects"
as permissive
for insert
to authenticated
with check ((( SELECT auth.uid() AS uid) = created_by));


create policy "authenticated_select_new_project"
on "mesa"."projects"
as permissive
for select
to authenticated
using ((( SELECT auth.uid() AS uid) = created_by));


create policy "authenticated_select_own_project"
on "mesa"."projects"
as permissive
for select
to authenticated
using (private.mesa_check_project_user_role(id, ( SELECT auth.uid() AS uid), 'owner'::mesa.project_user_role));


create policy "authenticated_update_own_project"
on "mesa"."projects"
as permissive
for update
to authenticated
using (private.mesa_check_project_user_role(id, ( SELECT auth.uid() AS uid), 'owner'::mesa.project_user_role));


CREATE TRIGGER "10_mesa_project_events_prevent_updates" BEFORE UPDATE ON mesa.project_events FOR EACH ROW EXECUTE FUNCTION private.mesa_prevent_update();

CREATE TRIGGER "20_mesa_project_events_handle_row_meta" BEFORE INSERT OR UPDATE ON mesa.project_events FOR EACH ROW EXECUTE FUNCTION private.mesa_handle_row_meta();

CREATE TRIGGER handle_invitation_accepted_trigger AFTER INSERT OR UPDATE ON mesa.project_invitations FOR EACH ROW WHEN ((new.status = 'accepted'::mesa.invitation_status)) EXECUTE FUNCTION private.mesa_handle_invitation_accepted();

CREATE TRIGGER handle_row_meta_on_project_invitations BEFORE INSERT OR UPDATE ON mesa.project_invitations FOR EACH ROW EXECUTE FUNCTION private.mesa_handle_row_meta();

CREATE TRIGGER check_project_user_invitation_trigger BEFORE INSERT ON mesa.project_users FOR EACH ROW EXECUTE FUNCTION private.mesa_check_project_user_invitation();

CREATE TRIGGER handle_row_meta_on_project_users BEFORE INSERT OR UPDATE ON mesa.project_users FOR EACH ROW EXECUTE FUNCTION private.mesa_handle_row_meta();

CREATE TRIGGER set_default_user_name_trigger BEFORE INSERT ON mesa.project_users FOR EACH ROW EXECUTE FUNCTION private.set_default_user_name();

CREATE TRIGGER handle_project_created_trigger AFTER INSERT ON mesa.projects FOR EACH ROW EXECUTE FUNCTION private.mesa_handle_project_created();

CREATE TRIGGER handle_row_meta_on_projects BEFORE INSERT OR UPDATE ON mesa.projects FOR EACH ROW EXECUTE FUNCTION private.mesa_handle_row_meta();


create schema if not exists "private";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION private.get_default_user_name(_user_id uuid)
 RETURNS text
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
  RETURN split_part((SELECT email FROM auth.users WHERE id = _user_id), '@', 1);
END;
$function$
;

CREATE OR REPLACE FUNCTION private.mesa_check_project_user_invitation()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
  DECLARE
    invitation_project_id UUID;
    invitation_user_id UUID;
    invitation_status mesa.invitation_status;
  BEGIN
    
    SELECT 
      project_id, 
      user_id, 
      status
    INTO 
      invitation_project_id, 
      invitation_user_id,
      invitation_status 
    FROM 
      mesa.project_invitations 
    WHERE 
      id = NEW.invitation_id;

    IF invitation_project_id IS NULL THEN
      RAISE EXCEPTION 'Invitation project id is null';
    END IF;
    IF invitation_project_id != NEW.project_id THEN
      RAISE EXCEPTION 'Invitation project mismatch. Expected % but got %', NEW.project_id, invitation_project_id;
    END IF;
    IF invitation_user_id != NEW.user_id THEN
      RAISE EXCEPTION 'Invitation user mismatch. Expected % but got %', NEW.user_id, invitation_user_id;
    END IF;
    IF invitation_status != 'accepted' THEN
      RAISE EXCEPTION 'Invitation status mismatch. Expected "accepted" but got "%"', invitation_status;
    END IF;
  END;
  RETURN NEW;
END;
$function$
;

CREATE OR REPLACE FUNCTION private.mesa_check_project_user_role(_project_id uuid, _user_id uuid, _user_role mesa.project_user_role)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM mesa.project_users
    WHERE project_id = _project_id 
      AND user_id = _user_id 
      AND user_role = _user_role
  );
END;
$function$
;

CREATE OR REPLACE FUNCTION private.mesa_handle_invitation_accepted()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
  IF TG_OP = 'UPDATE' AND OLD.status = NEW.status THEN
    -- skip, status not changed
    RETURN NEW;
  END IF;

  IF NEW.status = 'accepted' and (select auth.uid()) = NEW.user_id THEN
    
    RAISE LOG 'Invitation accepted: %. Adding user % to project % with role %.',
      NEW.id, NEW.user_id, NEW.project_id, NEW.user_role;
    
    INSERT INTO mesa.project_users 
    (
      project_id, 
      user_id, 
      user_role, 
      user_name, 
      user_bps, 
			user_email,
      contract_type,
      invitation_id
    )
    VALUES 
    (
      NEW.project_id, 
      NEW.user_id, 
      NEW.user_role, 
      NEW.user_name, 
      NEW.user_bps, 
			NEW.user_email,
      NEW.contract_type,
      NEW.id
    );
    
  END IF;
  
  RETURN NEW;
END;
$function$
;

CREATE OR REPLACE FUNCTION private.mesa_handle_project_created()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
  DECLARE
    creator_email VARCHAR;
BEGIN
  IF TG_OP = 'INSERT' AND (select auth.uid()) = NEW.created_by THEN
    
    RAISE LOG 'Project created: %. Adding creator % as owner via accepted invitation.',
      NEW.id, NEW.created_by;
			
		SELECT email into creator_email FROM auth.users WHERE id = auth.uid();
    
    INSERT INTO mesa.project_invitations 
    (
      project_id, 
      user_id, 
      user_role, 
      user_name, 
      user_bps, 
      contract_type,
      status,
			user_email
    )
    VALUES 
    (
      NEW.id, 
      NEW.created_by, 
      'owner', 
      private.get_default_user_name(NEW.created_by), 
      10000, 
      'master',
      'accepted',
			creator_email
    );
    
  END IF;
  RETURN NEW;
END;
$function$
;

CREATE OR REPLACE FUNCTION private.mesa_handle_row_meta()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
  IF TG_OP = 'INSERT' THEN
    NEW.created_by := (select auth.uid());
    NEW.created_at := CURRENT_TIMESTAMP;
    NEW.updated_at := CURRENT_TIMESTAMP;
  END IF;
  IF TG_OP = 'UPDATE' THEN
    IF NEW.created_by != OLD.created_by THEN
      RAISE EXCEPTION 'created_by cannot be changed';
    END IF;
    IF NEW.created_at != OLD.created_at THEN
      RAISE EXCEPTION 'created_at cannot be changed';
    END IF;
    NEW.updated_at := CURRENT_TIMESTAMP;
  END IF;
  RETURN NEW;
END;
$function$
;

CREATE OR REPLACE FUNCTION private.mesa_prevent_update()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'private', 'pg_temp'
AS $function$
BEGIN
  IF TG_OP = 'UPDATE' THEN
    RAISE EXCEPTION 'Updates to project_events are not allowed';
  END IF;
  RETURN NEW;
END;
$function$
;

CREATE OR REPLACE FUNCTION private.set_default_user_name()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
  IF NEW.user_name IS NULL THEN
    NEW.user_name := private.get_default_user_name(NEW.user_id);
  END IF;
  RETURN NEW;
END;
$function$
;


create table "public"."contracts" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "download_clicked" boolean,
    "emails" text[],
    "names" text[],
    "ipfs_cid" text
);


create table "public"."profiles" (
    "id" uuid not null,
    "updated_at" timestamp with time zone,
    "artistname" text,
    "legal_name" text,
    "avatar_url" text,
    "email" text,
    "userId" text,
    "addresses" text[]
);


CREATE UNIQUE INDEX contracts_pkey ON public.contracts USING btree (id);

CREATE UNIQUE INDEX profiles_pkey ON public.profiles USING btree (id);

CREATE UNIQUE INDEX profiles_username_key ON public.profiles USING btree (artistname);

alter table "public"."contracts" add constraint "contracts_pkey" PRIMARY KEY using index "contracts_pkey";

alter table "public"."profiles" add constraint "profiles_pkey" PRIMARY KEY using index "profiles_pkey";

alter table "public"."profiles" add constraint "profiles_username_key" UNIQUE using index "profiles_username_key";

alter table "public"."profiles" add constraint "username_length" CHECK ((char_length(artistname) >= 3)) not valid;

alter table "public"."profiles" validate constraint "username_length";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.user_wallets_check_update()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
begin
  if new.id != old.id
  or new.user_id != old.user_id 
  or new.wallet_address != old.wallet_address 
  or new.managed != old.managed 
  or new.created_at != old.created_at then
    raise exception 'cannot update protected columns: id, user_id, wallet_address, managed, created_at';
  end if;
  return new;
end;
$function$
;

grant delete on table "public"."contracts" to "anon";

grant insert on table "public"."contracts" to "anon";

grant references on table "public"."contracts" to "anon";

grant select on table "public"."contracts" to "anon";

grant trigger on table "public"."contracts" to "anon";

grant truncate on table "public"."contracts" to "anon";

grant update on table "public"."contracts" to "anon";

grant delete on table "public"."contracts" to "authenticated";

grant insert on table "public"."contracts" to "authenticated";

grant references on table "public"."contracts" to "authenticated";

grant select on table "public"."contracts" to "authenticated";

grant trigger on table "public"."contracts" to "authenticated";

grant truncate on table "public"."contracts" to "authenticated";

grant update on table "public"."contracts" to "authenticated";

grant delete on table "public"."contracts" to "service_role";

grant insert on table "public"."contracts" to "service_role";

grant references on table "public"."contracts" to "service_role";

grant select on table "public"."contracts" to "service_role";

grant trigger on table "public"."contracts" to "service_role";

grant truncate on table "public"."contracts" to "service_role";

grant update on table "public"."contracts" to "service_role";

grant delete on table "public"."profiles" to "anon";

grant insert on table "public"."profiles" to "anon";

grant references on table "public"."profiles" to "anon";

grant select on table "public"."profiles" to "anon";

grant trigger on table "public"."profiles" to "anon";

grant truncate on table "public"."profiles" to "anon";

grant update on table "public"."profiles" to "anon";

grant delete on table "public"."profiles" to "authenticated";

grant insert on table "public"."profiles" to "authenticated";

grant references on table "public"."profiles" to "authenticated";

grant select on table "public"."profiles" to "authenticated";

grant trigger on table "public"."profiles" to "authenticated";

grant truncate on table "public"."profiles" to "authenticated";

grant update on table "public"."profiles" to "authenticated";

grant delete on table "public"."profiles" to "service_role";

grant insert on table "public"."profiles" to "service_role";

grant references on table "public"."profiles" to "service_role";

grant select on table "public"."profiles" to "service_role";

grant trigger on table "public"."profiles" to "service_role";

grant truncate on table "public"."profiles" to "service_role";

grant update on table "public"."profiles" to "service_role";

create policy "Public profiles are viewable by everyone."
on "public"."profiles"
as permissive
for select
to public
using (true);


create policy "Users can insert their own profile."
on "public"."profiles"
as permissive
for insert
to public
with check ((auth.uid() = id));


create policy "Users can update own profile."
on "public"."profiles"
as permissive
for update
to public
using ((auth.uid() = id));



