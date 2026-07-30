# Waiter Cloud company module

This module owns the platform domain entities. It deliberately contains only:

- recipe
- restaurant
- school
- employee
- job
- application
- proposal
- contract
- comment

Each entity has an interface, CRUD service, and dynamic-form definition. Domain services use their
matching `companydeliver*` API resource name. `CompanyService` is the exception: it correctly uses
the existing `company` API resource to provide the business context for domain records. Routes and
page composition remain outside this module and are intentionally not changed here.
