// https://www.terraform.io/docs/providers/mongodbatlas/d/federated_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasFederatedSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/federated_settings#org_id DataMongodbatlasFederatedSettings#org_id}
  */
  readonly orgId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/d/federated_settings mongodbatlas_federated_settings}
*/
export class DataMongodbatlasFederatedSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_federated_settings";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/mongodbatlas/d/federated_settings mongodbatlas_federated_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasFederatedSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasFederatedSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_federated_settings',
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
    this._orgId = config.orgId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // federated_domains - computed: true, optional: false, required: false
  public get federatedDomains() {
    return this.getListAttribute('federated_domains');
  }

  // has_role_mappings - computed: true, optional: false, required: false
  public get hasRoleMappings() {
    return this.getBooleanAttribute('has_role_mappings');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_provider_id - computed: true, optional: false, required: false
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }

  // identity_provider_status - computed: true, optional: false, required: false
  public get identityProviderStatus() {
    return this.getStringAttribute('identity_provider_status');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      org_id: cdktf.stringToTerraform(this._orgId),
    };
  }
}
