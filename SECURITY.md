# Security Implementation Guide

This document outlines all security measures implemented for Southbroom Dental website.

## Security Headers

All security headers are configured in:
- `middleware.ts` - Dynamic headers with CSP
- `next.config.js` - Static headers
- `vercel.json` - Vercel-specific headers

### Headers Implemented:

1. **Content-Security-Policy (CSP)**
   - Allows: Own domain, Vercel, Google Maps, Google Fonts, Facebook Pixel
   - Blocks: Inline scripts (except React required ones)
   - Includes: `upgrade-insecure-requests`

2. **X-Content-Type-Options: nosniff**
   - Prevents MIME type sniffing

3. **X-Frame-Options: DENY**
   - Prevents clickjacking attacks

4. **X-XSS-Protection: 1; mode=block**
   - Enables XSS filtering

5. **Referrer-Policy: strict-origin-when-cross-origin**
   - Controls referrer information

6. **Permissions-Policy**
   - Restricts access to browser features (geolocation, camera, etc.)

7. **Strict-Transport-Security (HSTS)**
   - Forces HTTPS with 1 year max-age
   - Includes subdomains and preload

## Rate Limiting

- **Location**: `middleware.ts`
- **Limit**: 100 requests per 15 minutes per IP
- **Storage**: In-memory (upgrade to Redis for production)

## Bot Protection

- **Location**: `middleware.ts`
- **Method**: User-Agent pattern matching
- **Legitimate bots allowed**: Google, Bing, Facebook, etc.
- **Blocked**: curl, wget, scrapers, etc.

## Form Spam Protection

### Contact Form (`components/contact/contact-form.tsx`)

1. **Honeypot Field**
   - Hidden field named "website"
   - Bots fill it, humans don't see it
   - Form rejected if filled

2. **Time-based Validation**
   - Forms submitted in < 3 seconds are rejected
   - Prevents automated submissions

3. **Client-side Validation**
   - Zod schema validation
   - Type checking with TypeScript

## HTTPS Redirect

- **Location**: `next.config.js` and `vercel.json`
- **Behavior**: All HTTP requests redirect to HTTPS
- **WWW**: Configured to use www.southbroomdental.co.za

## Files Created

1. **`middleware.ts`** - Security middleware with headers and rate limiting
2. **`public/robots.txt`** - Search engine directives
3. **`public/.well-known/security.txt`** - Security contact information
4. **`app/sitemap.ts`** - XML sitemap for SEO
5. **`vercel.json`** - Vercel-specific configuration

## Production Recommendations

1. **Upgrade Rate Limiting**
   - Use Redis or Vercel Edge Config for distributed rate limiting
   - Consider Vercel's built-in rate limiting for Pro plan

2. **Add Monitoring**
   - Set up error tracking (Sentry, LogRocket)
   - Monitor failed form submissions
   - Track rate limit hits

3. **Additional Security**
   - Consider adding reCAPTCHA v3 for forms
   - Implement API route protection
   - Add request signing for sensitive operations

4. **Regular Updates**
   - Keep Next.js and dependencies updated
   - Review and update CSP as needed
   - Monitor security advisories

## Testing Security

Use these tools to verify security:
- [SecurityHeaders.com](https://securityheaders.com)
- [Mozilla Observatory](https://observatory.mozilla.org)
- [SSL Labs](https://www.ssllabs.com/ssltest/)

## Contact

For security issues, contact: info@southbroomdental.co.za
