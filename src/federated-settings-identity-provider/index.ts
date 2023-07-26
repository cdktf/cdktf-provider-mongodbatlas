// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/federated_settings_identity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FederatedSettingsIdentityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/federated_settings_identity_provider#associated_domains FederatedSettingsIdentityProvider#associated_domains}
  */
  readonly associatedDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/federated_settings_identity_provider#federation_settings_id FederatedSettingsIdentityProvider#federation_settings_id}
  */
  readonly federationSettingsId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/federated_settings_identity_provider#id FederatedSettingsIdentityProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/federated_settings_identity_provider#issuer_uri FederatedSettingsIdentityProvider#issuer_uri}
  */
  readonly issuerUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/federated_settings_identity_provider#name FederatedSettingsIdentityProvider#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/federated_settings_identity_provider#request_binding FederatedSettingsIdentityProvider#request_binding}
  */
  readonly requestBinding: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/federated_settings_identity_provider#response_signature_algorithm FederatedSettingsIdentityProvider#response_signature_algorithm}
  */
  readonly responseSignatureAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/federated_settings_identity_provider#sso_debug_enabled FederatedSettingsIdentityProvider#sso_debug_enabled}
  */
  readonly ssoDebugEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/federated_settings_identity_provider#sso_url FederatedSettingsIdentityProvider#sso_url}
  */
  readonly ssoUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/federated_settings_identity_provider#status FederatedSettingsIdentityProvider#status}
  */
  readonly status: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/federated_settings_identity_provider mongodbatlas_federated_settings_identity_provider}
*/
export class FederatedSettingsIdentityProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_federated_settings_identity_provider";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/federated_settings_identity_provider mongodbatlas_federated_settings_identity_provider} Resource
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
        providerVersion: '1.10.2',
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
    this._federationSettingsId = config.federationSettingsId;
    this._id = config.id;
    this._issuerUri = config.issuerUri;
    this._name = config.name;
    this._requestBinding = config.requestBinding;
    this._responseSignatureAlgorithm = config.responseSignatureAlgorithm;
    this._ssoDebugEnabled = config.ssoDebugEnabled;
    this._ssoUrl = config.ssoUrl;
    this._status = config.status;
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

  // request_binding - computed: false, optional: false, required: true
  private _requestBinding?: string; 
  public get requestBinding() {
    return this.getStringAttribute('request_binding');
  }
  public set requestBinding(value: string) {
    this._requestBinding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBindingInput() {
    return this._requestBinding;
  }

  // response_signature_algorithm - computed: false, optional: false, required: true
  private _responseSignatureAlgorithm?: string; 
  public get responseSignatureAlgorithm() {
    return this.getStringAttribute('response_signature_algorithm');
  }
  public set responseSignatureAlgorithm(value: string) {
    this._responseSignatureAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSignatureAlgorithmInput() {
    return this._responseSignatureAlgorithm;
  }

  // sso_debug_enabled - computed: false, optional: false, required: true
  private _ssoDebugEnabled?: boolean | cdktf.IResolvable; 
  public get ssoDebugEnabled() {
    return this.getBooleanAttribute('sso_debug_enabled');
  }
  public set ssoDebugEnabled(value: boolean | cdktf.IResolvable) {
    this._ssoDebugEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoDebugEnabledInput() {
    return this._ssoDebugEnabled;
  }

  // sso_url - computed: false, optional: false, required: true
  private _ssoUrl?: string; 
  public get ssoUrl() {
    return this.getStringAttribute('sso_url');
  }
  public set ssoUrl(value: string) {
    this._ssoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoUrlInput() {
    return this._ssoUrl;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associated_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._associatedDomains),
      federation_settings_id: cdktf.stringToTerraform(this._federationSettingsId),
      id: cdktf.stringToTerraform(this._id),
      issuer_uri: cdktf.stringToTerraform(this._issuerUri),
      name: cdktf.stringToTerraform(this._name),
      request_binding: cdktf.stringToTerraform(this._requestBinding),
      response_signature_algorithm: cdktf.stringToTerraform(this._responseSignatureAlgorithm),
      sso_debug_enabled: cdktf.booleanToTerraform(this._ssoDebugEnabled),
      sso_url: cdktf.stringToTerraform(this._ssoUrl),
      status: cdktf.stringToTerraform(this._status),
    };
  }
}
