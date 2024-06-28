// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/federated_settings_identity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FederatedSettingsIdentityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/federated_settings_identity_provider#associated_domains FederatedSettingsIdentityProvider#associated_domains}
  */
  readonly associatedDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/federated_settings_identity_provider#audience FederatedSettingsIdentityProvider#audience}
  */
  readonly audience?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/federated_settings_identity_provider#authorization_type FederatedSettingsIdentityProvider#authorization_type}
  */
  readonly authorizationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/federated_settings_identity_provider#client_id FederatedSettingsIdentityProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/federated_settings_identity_provider#description FederatedSettingsIdentityProvider#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/federated_settings_identity_provider#federation_settings_id FederatedSettingsIdentityProvider#federation_settings_id}
  */
  readonly federationSettingsId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/federated_settings_identity_provider#groups_claim FederatedSettingsIdentityProvider#groups_claim}
  */
  readonly groupsClaim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/federated_settings_identity_provider#id FederatedSettingsIdentityProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/federated_settings_identity_provider#idp_type FederatedSettingsIdentityProvider#idp_type}
  */
  readonly idpType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/federated_settings_identity_provider#issuer_uri FederatedSettingsIdentityProvider#issuer_uri}
  */
  readonly issuerUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/federated_settings_identity_provider#name FederatedSettingsIdentityProvider#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/federated_settings_identity_provider#protocol FederatedSettingsIdentityProvider#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/federated_settings_identity_provider#request_binding FederatedSettingsIdentityProvider#request_binding}
  */
  readonly requestBinding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/federated_settings_identity_provider#requested_scopes FederatedSettingsIdentityProvider#requested_scopes}
  */
  readonly requestedScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/federated_settings_identity_provider#response_signature_algorithm FederatedSettingsIdentityProvider#response_signature_algorithm}
  */
  readonly responseSignatureAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/federated_settings_identity_provider#sso_debug_enabled FederatedSettingsIdentityProvider#sso_debug_enabled}
  */
  readonly ssoDebugEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/federated_settings_identity_provider#sso_url FederatedSettingsIdentityProvider#sso_url}
  */
  readonly ssoUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/federated_settings_identity_provider#status FederatedSettingsIdentityProvider#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/federated_settings_identity_provider#user_claim FederatedSettingsIdentityProvider#user_claim}
  */
  readonly userClaim?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/federated_settings_identity_provider mongodbatlas_federated_settings_identity_provider}
*/
export class FederatedSettingsIdentityProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_federated_settings_identity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FederatedSettingsIdentityProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FederatedSettingsIdentityProvider to import
  * @param importFromId The id of the existing FederatedSettingsIdentityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/federated_settings_identity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FederatedSettingsIdentityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_federated_settings_identity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/federated_settings_identity_provider mongodbatlas_federated_settings_identity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FederatedSettingsIdentityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: FederatedSettingsIdentityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_federated_settings_identity_provider',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.17.3',
        providerVersionConstraint: '~> 1.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._associatedDomains = config.associatedDomains;
    this._audience = config.audience;
    this._authorizationType = config.authorizationType;
    this._clientId = config.clientId;
    this._description = config.description;
    this._federationSettingsId = config.federationSettingsId;
    this._groupsClaim = config.groupsClaim;
    this._id = config.id;
    this._idpType = config.idpType;
    this._issuerUri = config.issuerUri;
    this._name = config.name;
    this._protocol = config.protocol;
    this._requestBinding = config.requestBinding;
    this._requestedScopes = config.requestedScopes;
    this._responseSignatureAlgorithm = config.responseSignatureAlgorithm;
    this._ssoDebugEnabled = config.ssoDebugEnabled;
    this._ssoUrl = config.ssoUrl;
    this._status = config.status;
    this._userClaim = config.userClaim;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_domains - computed: false, optional: true, required: false
  private _associatedDomains?: string[]; 
  public get associatedDomains() {
    return this.getListAttribute('associated_domains');
  }
  public set associatedDomains(value: string[]) {
    this._associatedDomains = value;
  }
  public resetAssociatedDomains() {
    this._associatedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedDomainsInput() {
    return this._associatedDomains;
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // authorization_type - computed: false, optional: true, required: false
  private _authorizationType?: string; 
  public get authorizationType() {
    return this.getStringAttribute('authorization_type');
  }
  public set authorizationType(value: string) {
    this._authorizationType = value;
  }
  public resetAuthorizationType() {
    this._authorizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationTypeInput() {
    return this._authorizationType;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // federation_settings_id - computed: false, optional: false, required: true
  private _federationSettingsId?: string; 
  public get federationSettingsId() {
    return this.getStringAttribute('federation_settings_id');
  }
  public set federationSettingsId(value: string) {
    this._federationSettingsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get federationSettingsIdInput() {
    return this._federationSettingsId;
  }

  // groups_claim - computed: false, optional: true, required: false
  private _groupsClaim?: string; 
  public get groupsClaim() {
    return this.getStringAttribute('groups_claim');
  }
  public set groupsClaim(value: string) {
    this._groupsClaim = value;
  }
  public resetGroupsClaim() {
    this._groupsClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsClaimInput() {
    return this._groupsClaim;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // idp_id - computed: true, optional: false, required: false
  public get idpId() {
    return this.getStringAttribute('idp_id');
  }

  // idp_type - computed: true, optional: true, required: false
  private _idpType?: string; 
  public get idpType() {
    return this.getStringAttribute('idp_type');
  }
  public set idpType(value: string) {
    this._idpType = value;
  }
  public resetIdpType() {
    this._idpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpTypeInput() {
    return this._idpType;
  }

  // issuer_uri - computed: false, optional: false, required: true
  private _issuerUri?: string; 
  public get issuerUri() {
    return this.getStringAttribute('issuer_uri');
  }
  public set issuerUri(value: string) {
    this._issuerUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUriInput() {
    return this._issuerUri;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // okta_idp_id - computed: true, optional: false, required: false
  public get oktaIdpId() {
    return this.getStringAttribute('okta_idp_id');
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // request_binding - computed: false, optional: true, required: false
  private _requestBinding?: string; 
  public get requestBinding() {
    return this.getStringAttribute('request_binding');
  }
  public set requestBinding(value: string) {
    this._requestBinding = value;
  }
  public resetRequestBinding() {
    this._requestBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBindingInput() {
    return this._requestBinding;
  }

  // requested_scopes - computed: false, optional: true, required: false
  private _requestedScopes?: string[]; 
  public get requestedScopes() {
    return this.getListAttribute('requested_scopes');
  }
  public set requestedScopes(value: string[]) {
    this._requestedScopes = value;
  }
  public resetRequestedScopes() {
    this._requestedScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedScopesInput() {
    return this._requestedScopes;
  }

  // response_signature_algorithm - computed: false, optional: true, required: false
  private _responseSignatureAlgorithm?: string; 
  public get responseSignatureAlgorithm() {
    return this.getStringAttribute('response_signature_algorithm');
  }
  public set responseSignatureAlgorithm(value: string) {
    this._responseSignatureAlgorithm = value;
  }
  public resetResponseSignatureAlgorithm() {
    this._responseSignatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSignatureAlgorithmInput() {
    return this._responseSignatureAlgorithm;
  }

  // sso_debug_enabled - computed: false, optional: true, required: false
  private _ssoDebugEnabled?: boolean | cdktf.IResolvable; 
  public get ssoDebugEnabled() {
    return this.getBooleanAttribute('sso_debug_enabled');
  }
  public set ssoDebugEnabled(value: boolean | cdktf.IResolvable) {
    this._ssoDebugEnabled = value;
  }
  public resetSsoDebugEnabled() {
    this._ssoDebugEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoDebugEnabledInput() {
    return this._ssoDebugEnabled;
  }

  // sso_url - computed: false, optional: true, required: false
  private _ssoUrl?: string; 
  public get ssoUrl() {
    return this.getStringAttribute('sso_url');
  }
  public set ssoUrl(value: string) {
    this._ssoUrl = value;
  }
  public resetSsoUrl() {
    this._ssoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoUrlInput() {
    return this._ssoUrl;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // user_claim - computed: false, optional: true, required: false
  private _userClaim?: string; 
  public get userClaim() {
    return this.getStringAttribute('user_claim');
  }
  public set userClaim(value: string) {
    this._userClaim = value;
  }
  public resetUserClaim() {
    this._userClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userClaimInput() {
    return this._userClaim;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associated_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._associatedDomains),
      audience: cdktf.stringToTerraform(this._audience),
      authorization_type: cdktf.stringToTerraform(this._authorizationType),
      client_id: cdktf.stringToTerraform(this._clientId),
      description: cdktf.stringToTerraform(this._description),
      federation_settings_id: cdktf.stringToTerraform(this._federationSettingsId),
      groups_claim: cdktf.stringToTerraform(this._groupsClaim),
      id: cdktf.stringToTerraform(this._id),
      idp_type: cdktf.stringToTerraform(this._idpType),
      issuer_uri: cdktf.stringToTerraform(this._issuerUri),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      request_binding: cdktf.stringToTerraform(this._requestBinding),
      requested_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._requestedScopes),
      response_signature_algorithm: cdktf.stringToTerraform(this._responseSignatureAlgorithm),
      sso_debug_enabled: cdktf.booleanToTerraform(this._ssoDebugEnabled),
      sso_url: cdktf.stringToTerraform(this._ssoUrl),
      status: cdktf.stringToTerraform(this._status),
      user_claim: cdktf.stringToTerraform(this._userClaim),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associated_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._associatedDomains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      audience: {
        value: cdktf.stringToHclTerraform(this._audience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_type: {
        value: cdktf.stringToHclTerraform(this._authorizationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      federation_settings_id: {
        value: cdktf.stringToHclTerraform(this._federationSettingsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups_claim: {
        value: cdktf.stringToHclTerraform(this._groupsClaim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_type: {
        value: cdktf.stringToHclTerraform(this._idpType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuer_uri: {
        value: cdktf.stringToHclTerraform(this._issuerUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_binding: {
        value: cdktf.stringToHclTerraform(this._requestBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requested_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._requestedScopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      response_signature_algorithm: {
        value: cdktf.stringToHclTerraform(this._responseSignatureAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_debug_enabled: {
        value: cdktf.booleanToHclTerraform(this._ssoDebugEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sso_url: {
        value: cdktf.stringToHclTerraform(this._ssoUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_claim: {
        value: cdktf.stringToHclTerraform(this._userClaim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
