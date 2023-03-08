// https://www.terraform.io/docs/providers/mongodbatlas/r/federated_settings_org_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FederatedSettingsOrgConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/federated_settings_org_config#domain_allow_list FederatedSettingsOrgConfig#domain_allow_list}
  */
  readonly domainAllowList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/federated_settings_org_config#domain_restriction_enabled FederatedSettingsOrgConfig#domain_restriction_enabled}
  */
  readonly domainRestrictionEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/federated_settings_org_config#federation_settings_id FederatedSettingsOrgConfig#federation_settings_id}
  */
  readonly federationSettingsId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/federated_settings_org_config#id FederatedSettingsOrgConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/federated_settings_org_config#identity_provider_id FederatedSettingsOrgConfig#identity_provider_id}
  */
  readonly identityProviderId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/federated_settings_org_config#org_id FederatedSettingsOrgConfig#org_id}
  */
  readonly orgId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/federated_settings_org_config#post_auth_role_grants FederatedSettingsOrgConfig#post_auth_role_grants}
  */
  readonly postAuthRoleGrants?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/r/federated_settings_org_config mongodbatlas_federated_settings_org_config}
*/
export class FederatedSettingsOrgConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_federated_settings_org_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/mongodbatlas/r/federated_settings_org_config mongodbatlas_federated_settings_org_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FederatedSettingsOrgConfigConfig
  */
  public constructor(scope: Construct, id: string, config: FederatedSettingsOrgConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_federated_settings_org_config',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.8.1',
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
    this._domainAllowList = config.domainAllowList;
    this._domainRestrictionEnabled = config.domainRestrictionEnabled;
    this._federationSettingsId = config.federationSettingsId;
    this._id = config.id;
    this._identityProviderId = config.identityProviderId;
    this._orgId = config.orgId;
    this._postAuthRoleGrants = config.postAuthRoleGrants;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_allow_list - computed: false, optional: true, required: false
  private _domainAllowList?: string[]; 
  public get domainAllowList() {
    return this.getListAttribute('domain_allow_list');
  }
  public set domainAllowList(value: string[]) {
    this._domainAllowList = value;
  }
  public resetDomainAllowList() {
    this._domainAllowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainAllowListInput() {
    return this._domainAllowList;
  }

  // domain_restriction_enabled - computed: false, optional: false, required: true
  private _domainRestrictionEnabled?: boolean | cdktf.IResolvable; 
  public get domainRestrictionEnabled() {
    return this.getBooleanAttribute('domain_restriction_enabled');
  }
  public set domainRestrictionEnabled(value: boolean | cdktf.IResolvable) {
    this._domainRestrictionEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainRestrictionEnabledInput() {
    return this._domainRestrictionEnabled;
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

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // post_auth_role_grants - computed: false, optional: true, required: false
  private _postAuthRoleGrants?: string[]; 
  public get postAuthRoleGrants() {
    return this.getListAttribute('post_auth_role_grants');
  }
  public set postAuthRoleGrants(value: string[]) {
    this._postAuthRoleGrants = value;
  }
  public resetPostAuthRoleGrants() {
    this._postAuthRoleGrants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postAuthRoleGrantsInput() {
    return this._postAuthRoleGrants;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainAllowList),
      domain_restriction_enabled: cdktf.booleanToTerraform(this._domainRestrictionEnabled),
      federation_settings_id: cdktf.stringToTerraform(this._federationSettingsId),
      id: cdktf.stringToTerraform(this._id),
      identity_provider_id: cdktf.stringToTerraform(this._identityProviderId),
      org_id: cdktf.stringToTerraform(this._orgId),
      post_auth_role_grants: cdktf.listMapper(cdktf.stringToTerraform, false)(this._postAuthRoleGrants),
    };
  }
}
