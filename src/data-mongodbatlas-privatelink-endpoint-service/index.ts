// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/privatelink_endpoint_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasPrivatelinkEndpointServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/privatelink_endpoint_service#endpoint_service_id DataMongodbatlasPrivatelinkEndpointService#endpoint_service_id}
  */
  readonly endpointServiceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/privatelink_endpoint_service#id DataMongodbatlasPrivatelinkEndpointService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/privatelink_endpoint_service#private_link_id DataMongodbatlasPrivatelinkEndpointService#private_link_id}
  */
  readonly privateLinkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/privatelink_endpoint_service#project_id DataMongodbatlasPrivatelinkEndpointService#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/privatelink_endpoint_service#provider_name DataMongodbatlasPrivatelinkEndpointService#provider_name}
  */
  readonly providerName: string;
}
export interface DataMongodbatlasPrivatelinkEndpointServiceEndpoints {
}

export function dataMongodbatlasPrivatelinkEndpointServiceEndpointsToTerraform(struct?: DataMongodbatlasPrivatelinkEndpointServiceEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasPrivatelinkEndpointServiceEndpointsToHclTerraform(struct?: DataMongodbatlasPrivatelinkEndpointServiceEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasPrivatelinkEndpointServiceEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasPrivatelinkEndpointServiceEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint_name - computed: true, optional: false, required: false
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataMongodbatlasPrivatelinkEndpointServiceEndpointsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference {
    return new DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/privatelink_endpoint_service mongodbatlas_privatelink_endpoint_service}
*/
export class DataMongodbatlasPrivatelinkEndpointService extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_privatelink_endpoint_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasPrivatelinkEndpointService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasPrivatelinkEndpointService to import
  * @param importFromId The id of the existing DataMongodbatlasPrivatelinkEndpointService that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/privatelink_endpoint_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasPrivatelinkEndpointService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_privatelink_endpoint_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/privatelink_endpoint_service mongodbatlas_privatelink_endpoint_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasPrivatelinkEndpointServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasPrivatelinkEndpointServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_privatelink_endpoint_service',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.35.0',
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
    this._endpointServiceId = config.endpointServiceId;
    this._id = config.id;
    this._privateLinkId = config.privateLinkId;
    this._projectId = config.projectId;
    this._providerName = config.providerName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_connection_status - computed: true, optional: false, required: false
  public get awsConnectionStatus() {
    return this.getStringAttribute('aws_connection_status');
  }

  // azure_status - computed: true, optional: false, required: false
  public get azureStatus() {
    return this.getStringAttribute('azure_status');
  }

  // delete_requested - computed: true, optional: false, required: false
  public get deleteRequested() {
    return this.getBooleanAttribute('delete_requested');
  }

  // endpoint_service_id - computed: false, optional: false, required: true
  private _endpointServiceId?: string; 
  public get endpointServiceId() {
    return this.getStringAttribute('endpoint_service_id');
  }
  public set endpointServiceId(value: string) {
    this._endpointServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointServiceIdInput() {
    return this._endpointServiceId;
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new DataMongodbatlasPrivatelinkEndpointServiceEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // gcp_status - computed: true, optional: false, required: false
  public get gcpStatus() {
    return this.getStringAttribute('gcp_status');
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

  // interface_endpoint_id - computed: true, optional: false, required: false
  public get interfaceEndpointId() {
    return this.getStringAttribute('interface_endpoint_id');
  }

  // private_endpoint_connection_name - computed: true, optional: false, required: false
  public get privateEndpointConnectionName() {
    return this.getStringAttribute('private_endpoint_connection_name');
  }

  // private_endpoint_ip_address - computed: true, optional: false, required: false
  public get privateEndpointIpAddress() {
    return this.getStringAttribute('private_endpoint_ip_address');
  }

  // private_endpoint_resource_id - computed: true, optional: false, required: false
  public get privateEndpointResourceId() {
    return this.getStringAttribute('private_endpoint_resource_id');
  }

  // private_link_id - computed: false, optional: false, required: true
  private _privateLinkId?: string; 
  public get privateLinkId() {
    return this.getStringAttribute('private_link_id');
  }
  public set privateLinkId(value: string) {
    this._privateLinkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkIdInput() {
    return this._privateLinkId;
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

  // provider_name - computed: false, optional: false, required: true
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_service_id: cdktf.stringToTerraform(this._endpointServiceId),
      id: cdktf.stringToTerraform(this._id),
      private_link_id: cdktf.stringToTerraform(this._privateLinkId),
      project_id: cdktf.stringToTerraform(this._projectId),
      provider_name: cdktf.stringToTerraform(this._providerName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint_service_id: {
        value: cdktf.stringToHclTerraform(this._endpointServiceId),
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
      private_link_id: {
        value: cdktf.stringToHclTerraform(this._privateLinkId),
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
      provider_name: {
        value: cdktf.stringToHclTerraform(this._providerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
