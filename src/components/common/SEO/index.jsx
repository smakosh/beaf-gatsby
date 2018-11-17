import React from 'react'
import Helmet from 'react-helmet'
import Cover from 'Static/cover.png'
import {
	url,
	description,
	social,
	title,
	socialLinks,
	address,
	contact,
	legalName,
	foundingDate,
	logo,
} from 'Data'

const SEO = ({ children, type, location = '' }) => {
	const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "${type}",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"telephone": "${contact.phone}",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${address.city}",
			"addressRegion": "${address.region}",
			"addressCountry": "${address.country}",
			"postalCode": "${address.zipCode}"
		},
		"sameAs": [
			"${socialLinks.twitter}",
			"${socialLinks.google}",
			"${socialLinks.youtube}",
			"${socialLinks.linkedin}",
			"${socialLinks.instagram}",
			"${socialLinks.github}"
		]
  	}`

	return (
		<Helmet>
			<meta name="description" content={description} />
			<meta name="image" content={`${url}${Cover}`} />

			<meta property="og:url" content={`${url}${location}`} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={`${url}${Cover}`} />
			<meta property="fb:app_id" content={social.facebook} />

			<meta name="twitter:card" content="summary" />
			<meta name="twitter:creator" content={socialLinks.twitter} />
			<meta name="twitter:site" content={social.twitter} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image:src" content={`${url}${Cover}`} />
			<script type="application/ld+json">{structuredDataOrganization}</script>
			<link rel="publisher" href={socialLinks.google} />
			<title>{children}</title>
			<html lang="en" dir="ltr" />
		</Helmet>
	)
}

export { SEO }
