// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/resources/encryption_at_rest_private_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EncryptionAtRestPrivateEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Label that identifies the cloud provider for the Encryption At Rest private endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/resources/encryption_at_rest_private_endpoint#cloud_provider EncryptionAtRestPrivateEndpoint#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * Unique 24-hexadecimal digit string that identifies your project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/resources/encryption_at_rest_private_endpoint#project_id EncryptionAtRestPrivateEndpoint#project_id}
  */
  readonly projectId: string;
  /**
  * Cloud provider region in which the Encryption At Rest private endpoint is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/resources/encryption_at_rest_private_endpoint#region_name EncryptionAtRestPrivateEndpoint#region_name}
  */
  readonly regionName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/resources/encryption_at_rest_private_endpoint mongodbatlas_encryption_at_rest_private_endpoint}
*/
export class EncryptionAtRestPrivateEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_encryption_at_rest_private_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EncryptionAtRestPrivateEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EncryptionAtRestPrivateEndpoint to import
  * @param importFromId The id of the existing EncryptionAtRestPrivateEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/resources/encryption_at_rest_private_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EncryptionAtRestPrivateEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_encryption_at_rest_private_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.4/docs/resources/encryption_at_rest_private_endpoint mongodbatlas_encryption_at_rest_private_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EncryptionAtRestPrivateEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: EncryptionAtRestPrivateEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_encryption_at_rest_private_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.21.4',
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
    this._cloudProvider = config.cloudProvider;
    this._projectId = config.projectId;
    this._regionName = config.regionName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // private_endpoint_connection_name - computed: true, optional: false, required: false
  public get privateEndpointConnectionName() {
    return this.getStringAttribute('private_endpoint_connection_name');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region_name - computed: false, optional: false, required: true
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      project_id: cdktf.stringToTerraform(this._projectId),
      region_name: cdktf.stringToTerraform(this._regionName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
