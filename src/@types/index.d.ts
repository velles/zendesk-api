declare namespace Zendesk {
  namespace PaginatedResults {
    interface _ {
      count: number
      next_page: string
      previous_page: string
    }

    interface Users extends _ {
      users: User[]
    }
  }

  interface User {
    id?: number
    email?: string
    external_id?: string
    name: string
    tags?: string[]
    user_fields: {
      first_name?: string
      last_name?: string
      middle_name?: string
      suffix?: string
      birthday?: string
      email_address_flag?: boolean
      home_address_flag?: boolean
      home_address_line_1?: string
      home_address_line_2?: string
      home_address_city?: string
      home_address_state?: string
      home_address_zip_code?: string
      home_address_district?: string
      home_address_county?: string
      home_address_precinct?: string
      home_address_phone?: string
      no_mail_flag?: boolean
      no_bulk_mail_flag?: boolean
      household_flag?: boolean
      salutation?: string
      last_bulk_mailer_sent_on?: string
      email_validated_on?: string
      newsletter_flag?: boolean
      bulk_mailer_campaign_ids?: string
    }
  }
}