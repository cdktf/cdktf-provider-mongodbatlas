/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/privatelink_endpoint_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivatelinkEndpointServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/privatelink_endpoint_service#endpoint_service_id PrivatelinkEndpointService#endpoint_service_id}
  */
  readonly endpointServiceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/privatelink_endpoint_service#gcp_project_id PrivatelinkEndpointService#gcp_project_id}
  */
  readonly gcpProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/privatelink_endpoint_service#id PrivatelinkEndpointService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/privatelink_endpoint_service#private_endpoint_ip_address PrivatelinkEndpointService#private_endpoint_ip_address}
  */
  readonly privateEndpointIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/privatelink_endpoint_service#private_link_id PrivatelinkEndpointService#private_link_id}
  */
  readonly privateLinkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/privatelink_endpoint_service#project_id PrivatelinkEndpointService#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/privatelink_endpoint_service#provider_name PrivatelinkEndpointService#provider_name}
  */
  readonly providerName: string;
  /**
  * endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/privatelink_endpoint_service#endpoints PrivatelinkEndpointService#endpoints}
  */
  readonly endpoints?: PrivatelinkEndpointServiceEndpoints[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/privatelink_endpoint_service#timeouts PrivatelinkEndpointService#timeouts}
  */
  readonly timeouts?: PrivatelinkEndpointServiceTimeouts;
}
export interface PrivatelinkEndpointServiceEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/privatelink_endpoint_service#endpoint_name PrivatelinkEndpointService#endpoint_name}
  */
  readonly endpointName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/privatelink_endpoint_service#ip_address PrivatelinkEndpointService#ip_address}
  */
  readonly ipAddress?: string;
}

export function privatelinkEndpointServiceEndpointsToTerraform(struct?: PrivatelinkEndpointServiceEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_name: cdktf.stringToTerraform(struct!.endpointName),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function privatelinkEndpointServiceEndpointsToHclTerraform(struct?: PrivatelinkEndpointServiceEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_name: {
      value: cdktf.stringToHclTerraform(struct!.endpointName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivatelinkEndpointServiceEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PrivatelinkEndpointServiceEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointName = this._endpointName;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatelinkEndpointServiceEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointName = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointName = value.endpointName;
      this._ipAddress = value.ipAddress;
    }
  }

  // endpoint_name - computed: false, optional: true, required: false
  private _endpointName?: string; 
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
  public set endpointName(value: string) {
    this._endpointName = value;
  }
  public resetEndpointName() {
    this._endpointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameInput() {
    return this._endpointName;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // service_attachment_name - computed: true, optional: false, required: false
  public get serviceAttachmentName() {
    return this.getStringAttribute('service_attachment_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class PrivatelinkEndpointServiceEndpointsList extends cdktf.ComplexList {
  public internalValue? : PrivatelinkEndpointServiceEndpoints[] | cdktf.IResolvable

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
  public get(index: number): PrivatelinkEndpointServiceEndpointsOutputReference {
    return new PrivatelinkEndpointServiceEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivatelinkEndpointServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/privatelink_endpoint_service#create PrivatelinkEndpointService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/privatelink_endpoint_service#delete PrivatelinkEndpointService#delete}
  */
  readonly delete?: string;
}

export function privatelinkEndpointServiceTimeoutsToTerraform(struct?: PrivatelinkEndpointServiceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function privatelinkEndpointServiceTimeoutsToHclTerraform(struct?: PrivatelinkEndpointServiceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivatelinkEndpointServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivatelinkEndpointServiceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatelinkEndpointServiceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/privatelink_endpoint_service mongodbatlas_privatelink_endpoint_service}
*/
export class PrivatelinkEndpointService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_privatelink_endpoint_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivatelinkEndpointService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivatelinkEndpointService to import
  * @param importFromId The id of the existing PrivatelinkEndpointService that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/privatelink_endpoint_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivatelinkEndpointService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_privatelink_endpoint_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/privatelink_endpoint_service mongodbatlas_privatelink_endpoint_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivatelinkEndpointServiceConfig
  */
  public constructor(scope: Construct, id: string, config: PrivatelinkEndpointServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_privatelink_endpoint_service',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.15.2',
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
    this._gcpProjectId = config.gcpProjectId;
    this._id = config.id;
    this._privateEndpointIpAddress = config.privateEndpointIpAddress;
    this._privateLinkId = config.privateLinkId;
    this._projectId = config.projectId;
    this._providerName = config.providerName;
    this._endpoints.internalValue = config.endpoints;
    this._timeouts.internalValue = config.timeouts;
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

  // endpoint_group_name - computed: true, optional: false, required: false
  public get endpointGroupName() {
    return this.getStringAttribute('endpoint_group_name');
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

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // gcp_project_id - computed: false, optional: true, required: false
  private _gcpProjectId?: string; 
  public get gcpProjectId() {
    return this.getStringAttribute('gcp_project_id');
  }
  public set gcpProjectId(value: string) {
    this._gcpProjectId = value;
  }
  public resetGcpProjectId() {
    this._gcpProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProjectIdInput() {
    return this._gcpProjectId;
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

  // private_endpoint_ip_address - computed: true, optional: true, required: false
  private _privateEndpointIpAddress?: string; 
  public get privateEndpointIpAddress() {
    return this.getStringAttribute('private_endpoint_ip_address');
  }
  public set privateEndpointIpAddress(value: string) {
    this._privateEndpointIpAddress = value;
  }
  public resetPrivateEndpointIpAddress() {
    this._privateEndpointIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointIpAddressInput() {
    return this._privateEndpointIpAddress;
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

  // endpoints - computed: false, optional: true, required: false
  private _endpoints = new PrivatelinkEndpointServiceEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: PrivatelinkEndpointServiceEndpoints[] | cdktf.IResolvable) {
    this._endpoints.internalValue = value;
  }
  public resetEndpoints() {
    this._endpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PrivatelinkEndpointServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PrivatelinkEndpointServiceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_service_id: cdktf.stringToTerraform(this._endpointServiceId),
      gcp_project_id: cdktf.stringToTerraform(this._gcpProjectId),
      id: cdktf.stringToTerraform(this._id),
      private_endpoint_ip_address: cdktf.stringToTerraform(this._privateEndpointIpAddress),
      private_link_id: cdktf.stringToTerraform(this._privateLinkId),
      project_id: cdktf.stringToTerraform(this._projectId),
      provider_name: cdktf.stringToTerraform(this._providerName),
      endpoints: cdktf.listMapper(privatelinkEndpointServiceEndpointsToTerraform, true)(this._endpoints.internalValue),
      timeouts: privatelinkEndpointServiceTimeoutsToTerraform(this._timeouts.internalValue),
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
      gcp_project_id: {
        value: cdktf.stringToHclTerraform(this._gcpProjectId),
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
      private_endpoint_ip_address: {
        value: cdktf.stringToHclTerraform(this._privateEndpointIpAddress),
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
      endpoints: {
        value: cdktf.listMapperHcl(privatelinkEndpointServiceEndpointsToHclTerraform, true)(this._endpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrivatelinkEndpointServiceEndpointsList",
      },
      timeouts: {
        value: privatelinkEndpointServiceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PrivatelinkEndpointServiceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
