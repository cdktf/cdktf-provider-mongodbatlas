# `networkPeering` Submodule <a name="`networkPeering` Submodule" id="@cdktf/provider-mongodbatlas.networkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkPeering <a name="NetworkPeering" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering mongodbatlas_network_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.network_peering.NetworkPeering;

NetworkPeering.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .containerId(java.lang.String)
    .projectId(java.lang.String)
    .providerName(java.lang.String)
//  .accepterRegionName(java.lang.String)
//  .atlasCidrBlock(java.lang.String)
//  .atlasGcpProjectId(java.lang.String)
//  .atlasVpcName(java.lang.String)
//  .awsAccountId(java.lang.String)
//  .azureDirectoryId(java.lang.String)
//  .azureSubscriptionId(java.lang.String)
//  .gcpProjectId(java.lang.String)
//  .id(java.lang.String)
//  .networkName(java.lang.String)
//  .resourceGroupName(java.lang.String)
//  .routeTableCidrBlock(java.lang.String)
//  .vnetName(java.lang.String)
//  .vpcId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.containerId">containerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#container_id NetworkPeering#container_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#project_id NetworkPeering#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.providerName">providerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#provider_name NetworkPeering#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.accepterRegionName">accepterRegionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#accepter_region_name NetworkPeering#accepter_region_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.atlasCidrBlock">atlasCidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#atlas_cidr_block NetworkPeering#atlas_cidr_block}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.atlasGcpProjectId">atlasGcpProjectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#atlas_gcp_project_id NetworkPeering#atlas_gcp_project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.atlasVpcName">atlasVpcName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#atlas_vpc_name NetworkPeering#atlas_vpc_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#aws_account_id NetworkPeering#aws_account_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.azureDirectoryId">azureDirectoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#azure_directory_id NetworkPeering#azure_directory_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.azureSubscriptionId">azureSubscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#azure_subscription_id NetworkPeering#azure_subscription_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.gcpProjectId">gcpProjectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#gcp_project_id NetworkPeering#gcp_project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#id NetworkPeering#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.networkName">networkName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#network_name NetworkPeering#network_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#resource_group_name NetworkPeering#resource_group_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.routeTableCidrBlock">routeTableCidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#route_table_cidr_block NetworkPeering#route_table_cidr_block}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.vnetName">vnetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#vnet_name NetworkPeering#vnet_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#vpc_id NetworkPeering#vpc_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.containerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#container_id NetworkPeering#container_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#project_id NetworkPeering#project_id}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.providerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#provider_name NetworkPeering#provider_name}.

---

##### `accepterRegionName`<sup>Optional</sup> <a name="accepterRegionName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.accepterRegionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#accepter_region_name NetworkPeering#accepter_region_name}.

---

##### `atlasCidrBlock`<sup>Optional</sup> <a name="atlasCidrBlock" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.atlasCidrBlock"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#atlas_cidr_block NetworkPeering#atlas_cidr_block}.

---

##### `atlasGcpProjectId`<sup>Optional</sup> <a name="atlasGcpProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.atlasGcpProjectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#atlas_gcp_project_id NetworkPeering#atlas_gcp_project_id}.

---

##### `atlasVpcName`<sup>Optional</sup> <a name="atlasVpcName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.atlasVpcName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#atlas_vpc_name NetworkPeering#atlas_vpc_name}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.awsAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#aws_account_id NetworkPeering#aws_account_id}.

---

##### `azureDirectoryId`<sup>Optional</sup> <a name="azureDirectoryId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.azureDirectoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#azure_directory_id NetworkPeering#azure_directory_id}.

---

##### `azureSubscriptionId`<sup>Optional</sup> <a name="azureSubscriptionId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.azureSubscriptionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#azure_subscription_id NetworkPeering#azure_subscription_id}.

---

##### `gcpProjectId`<sup>Optional</sup> <a name="gcpProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.gcpProjectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#gcp_project_id NetworkPeering#gcp_project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#id NetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkName`<sup>Optional</sup> <a name="networkName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.networkName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#network_name NetworkPeering#network_name}.

---

##### `resourceGroupName`<sup>Optional</sup> <a name="resourceGroupName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#resource_group_name NetworkPeering#resource_group_name}.

---

##### `routeTableCidrBlock`<sup>Optional</sup> <a name="routeTableCidrBlock" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.routeTableCidrBlock"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#route_table_cidr_block NetworkPeering#route_table_cidr_block}.

---

##### `vnetName`<sup>Optional</sup> <a name="vnetName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.vnetName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#vnet_name NetworkPeering#vnet_name}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#vpc_id NetworkPeering#vpc_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAccepterRegionName">resetAccepterRegionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAtlasCidrBlock">resetAtlasCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAtlasGcpProjectId">resetAtlasGcpProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAtlasVpcName">resetAtlasVpcName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAzureDirectoryId">resetAzureDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAzureSubscriptionId">resetAzureSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetGcpProjectId">resetGcpProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetNetworkName">resetNetworkName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetResourceGroupName">resetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetRouteTableCidrBlock">resetRouteTableCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetVnetName">resetVnetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccepterRegionName` <a name="resetAccepterRegionName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAccepterRegionName"></a>

```java
public void resetAccepterRegionName()
```

##### `resetAtlasCidrBlock` <a name="resetAtlasCidrBlock" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAtlasCidrBlock"></a>

```java
public void resetAtlasCidrBlock()
```

##### `resetAtlasGcpProjectId` <a name="resetAtlasGcpProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAtlasGcpProjectId"></a>

```java
public void resetAtlasGcpProjectId()
```

##### `resetAtlasVpcName` <a name="resetAtlasVpcName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAtlasVpcName"></a>

```java
public void resetAtlasVpcName()
```

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAwsAccountId"></a>

```java
public void resetAwsAccountId()
```

##### `resetAzureDirectoryId` <a name="resetAzureDirectoryId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAzureDirectoryId"></a>

```java
public void resetAzureDirectoryId()
```

##### `resetAzureSubscriptionId` <a name="resetAzureSubscriptionId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAzureSubscriptionId"></a>

```java
public void resetAzureSubscriptionId()
```

##### `resetGcpProjectId` <a name="resetGcpProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetGcpProjectId"></a>

```java
public void resetGcpProjectId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetId"></a>

```java
public void resetId()
```

##### `resetNetworkName` <a name="resetNetworkName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetNetworkName"></a>

```java
public void resetNetworkName()
```

##### `resetResourceGroupName` <a name="resetResourceGroupName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetResourceGroupName"></a>

```java
public void resetResourceGroupName()
```

##### `resetRouteTableCidrBlock` <a name="resetRouteTableCidrBlock" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetRouteTableCidrBlock"></a>

```java
public void resetRouteTableCidrBlock()
```

##### `resetVnetName` <a name="resetVnetName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetVnetName"></a>

```java
public void resetVnetName()
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetVpcId"></a>

```java
public void resetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkPeering resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.network_peering.NetworkPeering;

NetworkPeering.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.network_peering.NetworkPeering;

NetworkPeering.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.network_peering.NetworkPeering;

NetworkPeering.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.network_peering.NetworkPeering;

NetworkPeering.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkPeering.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetworkPeering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkPeering to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetworkPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasId">atlasId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorState">errorState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorStateName">errorStateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.peerId">peerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.statusName">statusName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.accepterRegionNameInput">accepterRegionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasCidrBlockInput">atlasCidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasGcpProjectIdInput">atlasGcpProjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasVpcNameInput">atlasVpcNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureDirectoryIdInput">azureDirectoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureSubscriptionIdInput">azureSubscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.containerIdInput">containerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.gcpProjectIdInput">gcpProjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.networkNameInput">networkNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.providerNameInput">providerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.routeTableCidrBlockInput">routeTableCidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vnetNameInput">vnetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.accepterRegionName">accepterRegionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasCidrBlock">atlasCidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasGcpProjectId">atlasGcpProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasVpcName">atlasVpcName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureDirectoryId">azureDirectoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureSubscriptionId">azureSubscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.containerId">containerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.gcpProjectId">gcpProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.networkName">networkName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.providerName">providerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.routeTableCidrBlock">routeTableCidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vnetName">vnetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `atlasId`<sup>Required</sup> <a name="atlasId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasId"></a>

```java
public java.lang.String getAtlasId();
```

- *Type:* java.lang.String

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `errorState`<sup>Required</sup> <a name="errorState" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorState"></a>

```java
public java.lang.String getErrorState();
```

- *Type:* java.lang.String

---

##### `errorStateName`<sup>Required</sup> <a name="errorStateName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorStateName"></a>

```java
public java.lang.String getErrorStateName();
```

- *Type:* java.lang.String

---

##### `peerId`<sup>Required</sup> <a name="peerId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.peerId"></a>

```java
public java.lang.String getPeerId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusName`<sup>Required</sup> <a name="statusName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.statusName"></a>

```java
public java.lang.String getStatusName();
```

- *Type:* java.lang.String

---

##### `accepterRegionNameInput`<sup>Optional</sup> <a name="accepterRegionNameInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.accepterRegionNameInput"></a>

```java
public java.lang.String getAccepterRegionNameInput();
```

- *Type:* java.lang.String

---

##### `atlasCidrBlockInput`<sup>Optional</sup> <a name="atlasCidrBlockInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasCidrBlockInput"></a>

```java
public java.lang.String getAtlasCidrBlockInput();
```

- *Type:* java.lang.String

---

##### `atlasGcpProjectIdInput`<sup>Optional</sup> <a name="atlasGcpProjectIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasGcpProjectIdInput"></a>

```java
public java.lang.String getAtlasGcpProjectIdInput();
```

- *Type:* java.lang.String

---

##### `atlasVpcNameInput`<sup>Optional</sup> <a name="atlasVpcNameInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasVpcNameInput"></a>

```java
public java.lang.String getAtlasVpcNameInput();
```

- *Type:* java.lang.String

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.awsAccountIdInput"></a>

```java
public java.lang.String getAwsAccountIdInput();
```

- *Type:* java.lang.String

---

##### `azureDirectoryIdInput`<sup>Optional</sup> <a name="azureDirectoryIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureDirectoryIdInput"></a>

```java
public java.lang.String getAzureDirectoryIdInput();
```

- *Type:* java.lang.String

---

##### `azureSubscriptionIdInput`<sup>Optional</sup> <a name="azureSubscriptionIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureSubscriptionIdInput"></a>

```java
public java.lang.String getAzureSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `containerIdInput`<sup>Optional</sup> <a name="containerIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.containerIdInput"></a>

```java
public java.lang.String getContainerIdInput();
```

- *Type:* java.lang.String

---

##### `gcpProjectIdInput`<sup>Optional</sup> <a name="gcpProjectIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.gcpProjectIdInput"></a>

```java
public java.lang.String getGcpProjectIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `networkNameInput`<sup>Optional</sup> <a name="networkNameInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.networkNameInput"></a>

```java
public java.lang.String getNetworkNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.providerNameInput"></a>

```java
public java.lang.String getProviderNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `routeTableCidrBlockInput`<sup>Optional</sup> <a name="routeTableCidrBlockInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.routeTableCidrBlockInput"></a>

```java
public java.lang.String getRouteTableCidrBlockInput();
```

- *Type:* java.lang.String

---

##### `vnetNameInput`<sup>Optional</sup> <a name="vnetNameInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vnetNameInput"></a>

```java
public java.lang.String getVnetNameInput();
```

- *Type:* java.lang.String

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `accepterRegionName`<sup>Required</sup> <a name="accepterRegionName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.accepterRegionName"></a>

```java
public java.lang.String getAccepterRegionName();
```

- *Type:* java.lang.String

---

##### `atlasCidrBlock`<sup>Required</sup> <a name="atlasCidrBlock" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasCidrBlock"></a>

```java
public java.lang.String getAtlasCidrBlock();
```

- *Type:* java.lang.String

---

##### `atlasGcpProjectId`<sup>Required</sup> <a name="atlasGcpProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasGcpProjectId"></a>

```java
public java.lang.String getAtlasGcpProjectId();
```

- *Type:* java.lang.String

---

##### `atlasVpcName`<sup>Required</sup> <a name="atlasVpcName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasVpcName"></a>

```java
public java.lang.String getAtlasVpcName();
```

- *Type:* java.lang.String

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `azureDirectoryId`<sup>Required</sup> <a name="azureDirectoryId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureDirectoryId"></a>

```java
public java.lang.String getAzureDirectoryId();
```

- *Type:* java.lang.String

---

##### `azureSubscriptionId`<sup>Required</sup> <a name="azureSubscriptionId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureSubscriptionId"></a>

```java
public java.lang.String getAzureSubscriptionId();
```

- *Type:* java.lang.String

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.containerId"></a>

```java
public java.lang.String getContainerId();
```

- *Type:* java.lang.String

---

##### `gcpProjectId`<sup>Required</sup> <a name="gcpProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.gcpProjectId"></a>

```java
public java.lang.String getGcpProjectId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.networkName"></a>

```java
public java.lang.String getNetworkName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `routeTableCidrBlock`<sup>Required</sup> <a name="routeTableCidrBlock" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.routeTableCidrBlock"></a>

```java
public java.lang.String getRouteTableCidrBlock();
```

- *Type:* java.lang.String

---

##### `vnetName`<sup>Required</sup> <a name="vnetName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vnetName"></a>

```java
public java.lang.String getVnetName();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkPeeringConfig <a name="NetworkPeeringConfig" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.network_peering.NetworkPeeringConfig;

NetworkPeeringConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .containerId(java.lang.String)
    .projectId(java.lang.String)
    .providerName(java.lang.String)
//  .accepterRegionName(java.lang.String)
//  .atlasCidrBlock(java.lang.String)
//  .atlasGcpProjectId(java.lang.String)
//  .atlasVpcName(java.lang.String)
//  .awsAccountId(java.lang.String)
//  .azureDirectoryId(java.lang.String)
//  .azureSubscriptionId(java.lang.String)
//  .gcpProjectId(java.lang.String)
//  .id(java.lang.String)
//  .networkName(java.lang.String)
//  .resourceGroupName(java.lang.String)
//  .routeTableCidrBlock(java.lang.String)
//  .vnetName(java.lang.String)
//  .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.containerId">containerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#container_id NetworkPeering#container_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#project_id NetworkPeering#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.providerName">providerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#provider_name NetworkPeering#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.accepterRegionName">accepterRegionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#accepter_region_name NetworkPeering#accepter_region_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasCidrBlock">atlasCidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#atlas_cidr_block NetworkPeering#atlas_cidr_block}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasGcpProjectId">atlasGcpProjectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#atlas_gcp_project_id NetworkPeering#atlas_gcp_project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasVpcName">atlasVpcName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#atlas_vpc_name NetworkPeering#atlas_vpc_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#aws_account_id NetworkPeering#aws_account_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.azureDirectoryId">azureDirectoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#azure_directory_id NetworkPeering#azure_directory_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.azureSubscriptionId">azureSubscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#azure_subscription_id NetworkPeering#azure_subscription_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.gcpProjectId">gcpProjectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#gcp_project_id NetworkPeering#gcp_project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#id NetworkPeering#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.networkName">networkName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#network_name NetworkPeering#network_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#resource_group_name NetworkPeering#resource_group_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.routeTableCidrBlock">routeTableCidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#route_table_cidr_block NetworkPeering#route_table_cidr_block}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.vnetName">vnetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#vnet_name NetworkPeering#vnet_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#vpc_id NetworkPeering#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.containerId"></a>

```java
public java.lang.String getContainerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#container_id NetworkPeering#container_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#project_id NetworkPeering#project_id}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#provider_name NetworkPeering#provider_name}.

---

##### `accepterRegionName`<sup>Optional</sup> <a name="accepterRegionName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.accepterRegionName"></a>

```java
public java.lang.String getAccepterRegionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#accepter_region_name NetworkPeering#accepter_region_name}.

---

##### `atlasCidrBlock`<sup>Optional</sup> <a name="atlasCidrBlock" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasCidrBlock"></a>

```java
public java.lang.String getAtlasCidrBlock();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#atlas_cidr_block NetworkPeering#atlas_cidr_block}.

---

##### `atlasGcpProjectId`<sup>Optional</sup> <a name="atlasGcpProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasGcpProjectId"></a>

```java
public java.lang.String getAtlasGcpProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#atlas_gcp_project_id NetworkPeering#atlas_gcp_project_id}.

---

##### `atlasVpcName`<sup>Optional</sup> <a name="atlasVpcName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasVpcName"></a>

```java
public java.lang.String getAtlasVpcName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#atlas_vpc_name NetworkPeering#atlas_vpc_name}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#aws_account_id NetworkPeering#aws_account_id}.

---

##### `azureDirectoryId`<sup>Optional</sup> <a name="azureDirectoryId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.azureDirectoryId"></a>

```java
public java.lang.String getAzureDirectoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#azure_directory_id NetworkPeering#azure_directory_id}.

---

##### `azureSubscriptionId`<sup>Optional</sup> <a name="azureSubscriptionId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.azureSubscriptionId"></a>

```java
public java.lang.String getAzureSubscriptionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#azure_subscription_id NetworkPeering#azure_subscription_id}.

---

##### `gcpProjectId`<sup>Optional</sup> <a name="gcpProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.gcpProjectId"></a>

```java
public java.lang.String getGcpProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#gcp_project_id NetworkPeering#gcp_project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#id NetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkName`<sup>Optional</sup> <a name="networkName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.networkName"></a>

```java
public java.lang.String getNetworkName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#network_name NetworkPeering#network_name}.

---

##### `resourceGroupName`<sup>Optional</sup> <a name="resourceGroupName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#resource_group_name NetworkPeering#resource_group_name}.

---

##### `routeTableCidrBlock`<sup>Optional</sup> <a name="routeTableCidrBlock" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.routeTableCidrBlock"></a>

```java
public java.lang.String getRouteTableCidrBlock();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#route_table_cidr_block NetworkPeering#route_table_cidr_block}.

---

##### `vnetName`<sup>Optional</sup> <a name="vnetName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.vnetName"></a>

```java
public java.lang.String getVnetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#vnet_name NetworkPeering#vnet_name}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/network_peering#vpc_id NetworkPeering#vpc_id}.

---



