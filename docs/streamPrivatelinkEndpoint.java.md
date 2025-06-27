# `streamPrivatelinkEndpoint` Submodule <a name="`streamPrivatelinkEndpoint` Submodule" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamPrivatelinkEndpoint <a name="StreamPrivatelinkEndpoint" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/resources/stream_privatelink_endpoint mongodbatlas_stream_privatelink_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_privatelink_endpoint.StreamPrivatelinkEndpoint;

StreamPrivatelinkEndpoint.Builder.create(Construct scope, java.lang.String id)
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
    .projectId(java.lang.String)
    .providerName(java.lang.String)
    .vendor(java.lang.String)
//  .arn(java.lang.String)
//  .dnsDomain(java.lang.String)
//  .dnsSubDomain(java.util.List<java.lang.String>)
//  .region(java.lang.String)
//  .serviceEndpointId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.providerName">providerName</a></code> | <code>java.lang.String</code> | Provider where the Kafka cluster is deployed. Valid values are AWS and AZURE. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.vendor">vendor</a></code> | <code>java.lang.String</code> | Vendor that manages the Kafka cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.arn">arn</a></code> | <code>java.lang.String</code> | Amazon Resource Name (ARN). Required for AWS Provider and MSK vendor. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.dnsDomain">dnsDomain</a></code> | <code>java.lang.String</code> | The domain hostname. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.dnsSubDomain">dnsSubDomain</a></code> | <code>java.util.List<java.lang.String></code> | Sub-Domain name of Confluent cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of the Provider’s cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.serviceEndpointId">serviceEndpointId</a></code> | <code>java.lang.String</code> | For AZURE EVENTHUB, this is the [namespace endpoint ID](https://learn.microsoft.com/en-us/rest/api/eventhub/namespaces/get). For AWS CONFLUENT cluster, this is the [VPC Endpoint service name](https://docs.confluent.io/cloud/current/networking/private-links/aws-privatelink.html). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Unique 24-hexadecimal digit string that identifies your project.

Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.<br>**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group or project id remains the same. The resource and corresponding endpoints use the term groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/resources/stream_privatelink_endpoint#project_id StreamPrivatelinkEndpoint#project_id}

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.providerName"></a>

- *Type:* java.lang.String

Provider where the Kafka cluster is deployed. Valid values are AWS and AZURE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/resources/stream_privatelink_endpoint#provider_name StreamPrivatelinkEndpoint#provider_name}

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.vendor"></a>

- *Type:* java.lang.String

Vendor that manages the Kafka cluster.

The following are the vendor values per provider:<br>- MSK and CONFLUENT for the AWS provider.<br>- EVENTHUB and CONFLUENT for the AZURE provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/resources/stream_privatelink_endpoint#vendor StreamPrivatelinkEndpoint#vendor}

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.arn"></a>

- *Type:* java.lang.String

Amazon Resource Name (ARN). Required for AWS Provider and MSK vendor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/resources/stream_privatelink_endpoint#arn StreamPrivatelinkEndpoint#arn}

---

##### `dnsDomain`<sup>Optional</sup> <a name="dnsDomain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.dnsDomain"></a>

- *Type:* java.lang.String

The domain hostname.

Required for the following provider and vendor combinations:<br>- AWS provider with CONFLUENT vendor.<br>- AZURE provider with EVENTHUB or CONFLUENT vendor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/resources/stream_privatelink_endpoint#dns_domain StreamPrivatelinkEndpoint#dns_domain}

---

##### `dnsSubDomain`<sup>Optional</sup> <a name="dnsSubDomain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.dnsSubDomain"></a>

- *Type:* java.util.List<java.lang.String>

Sub-Domain name of Confluent cluster.

These are typically your availability zones. Required for AWS Provider and CONFLUENT vendor. If your AWS CONFLUENT cluster doesn't use subdomains, you must set this to the empty array [].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/resources/stream_privatelink_endpoint#dns_sub_domain StreamPrivatelinkEndpoint#dns_sub_domain}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of the Provider’s cluster.

See [AZURE](https://www.mongodb.com/docs/atlas/reference/microsoft-azure/#stream-processing-instances) and [AWS](https://www.mongodb.com/docs/atlas/reference/amazon-aws/#stream-processing-instances) supported regions. When the vendor is `CONFLUENT`, this is the domain name of Confluent cluster. When the vendor is `MSK`, this is computed by the API from the provided `arn`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/resources/stream_privatelink_endpoint#region StreamPrivatelinkEndpoint#region}

---

##### `serviceEndpointId`<sup>Optional</sup> <a name="serviceEndpointId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.serviceEndpointId"></a>

- *Type:* java.lang.String

For AZURE EVENTHUB, this is the [namespace endpoint ID](https://learn.microsoft.com/en-us/rest/api/eventhub/namespaces/get). For AWS CONFLUENT cluster, this is the [VPC Endpoint service name](https://docs.confluent.io/cloud/current/networking/private-links/aws-privatelink.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/resources/stream_privatelink_endpoint#service_endpoint_id StreamPrivatelinkEndpoint#service_endpoint_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetDnsDomain">resetDnsDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetDnsSubDomain">resetDnsSubDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetServiceEndpointId">resetServiceEndpointId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetArn` <a name="resetArn" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetArn"></a>

```java
public void resetArn()
```

##### `resetDnsDomain` <a name="resetDnsDomain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetDnsDomain"></a>

```java
public void resetDnsDomain()
```

##### `resetDnsSubDomain` <a name="resetDnsSubDomain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetDnsSubDomain"></a>

```java
public void resetDnsSubDomain()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetServiceEndpointId` <a name="resetServiceEndpointId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetServiceEndpointId"></a>

```java
public void resetServiceEndpointId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StreamPrivatelinkEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_privatelink_endpoint.StreamPrivatelinkEndpoint;

StreamPrivatelinkEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_privatelink_endpoint.StreamPrivatelinkEndpoint;

StreamPrivatelinkEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_privatelink_endpoint.StreamPrivatelinkEndpoint;

StreamPrivatelinkEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_privatelink_endpoint.StreamPrivatelinkEndpoint;

StreamPrivatelinkEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StreamPrivatelinkEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StreamPrivatelinkEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StreamPrivatelinkEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StreamPrivatelinkEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/resources/stream_privatelink_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StreamPrivatelinkEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.interfaceEndpointId">interfaceEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.interfaceEndpointName">interfaceEndpointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.providerAccountId">providerAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsDomainInput">dnsDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsSubDomainInput">dnsSubDomainInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.providerNameInput">providerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.serviceEndpointIdInput">serviceEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.vendorInput">vendorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsDomain">dnsDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsSubDomain">dnsSubDomain</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.providerName">providerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.serviceEndpointId">serviceEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.vendor">vendor</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `interfaceEndpointId`<sup>Required</sup> <a name="interfaceEndpointId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.interfaceEndpointId"></a>

```java
public java.lang.String getInterfaceEndpointId();
```

- *Type:* java.lang.String

---

##### `interfaceEndpointName`<sup>Required</sup> <a name="interfaceEndpointName" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.interfaceEndpointName"></a>

```java
public java.lang.String getInterfaceEndpointName();
```

- *Type:* java.lang.String

---

##### `providerAccountId`<sup>Required</sup> <a name="providerAccountId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.providerAccountId"></a>

```java
public java.lang.String getProviderAccountId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `dnsDomainInput`<sup>Optional</sup> <a name="dnsDomainInput" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsDomainInput"></a>

```java
public java.lang.String getDnsDomainInput();
```

- *Type:* java.lang.String

---

##### `dnsSubDomainInput`<sup>Optional</sup> <a name="dnsSubDomainInput" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsSubDomainInput"></a>

```java
public java.util.List<java.lang.String> getDnsSubDomainInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.providerNameInput"></a>

```java
public java.lang.String getProviderNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `serviceEndpointIdInput`<sup>Optional</sup> <a name="serviceEndpointIdInput" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.serviceEndpointIdInput"></a>

```java
public java.lang.String getServiceEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `vendorInput`<sup>Optional</sup> <a name="vendorInput" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.vendorInput"></a>

```java
public java.lang.String getVendorInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `dnsDomain`<sup>Required</sup> <a name="dnsDomain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsDomain"></a>

```java
public java.lang.String getDnsDomain();
```

- *Type:* java.lang.String

---

##### `dnsSubDomain`<sup>Required</sup> <a name="dnsSubDomain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsSubDomain"></a>

```java
public java.util.List<java.lang.String> getDnsSubDomain();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `serviceEndpointId`<sup>Required</sup> <a name="serviceEndpointId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.serviceEndpointId"></a>

```java
public java.lang.String getServiceEndpointId();
```

- *Type:* java.lang.String

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.vendor"></a>

```java
public java.lang.String getVendor();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StreamPrivatelinkEndpointConfig <a name="StreamPrivatelinkEndpointConfig" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_privatelink_endpoint.StreamPrivatelinkEndpointConfig;

StreamPrivatelinkEndpointConfig.builder()
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
    .projectId(java.lang.String)
    .providerName(java.lang.String)
    .vendor(java.lang.String)
//  .arn(java.lang.String)
//  .dnsDomain(java.lang.String)
//  .dnsSubDomain(java.util.List<java.lang.String>)
//  .region(java.lang.String)
//  .serviceEndpointId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.providerName">providerName</a></code> | <code>java.lang.String</code> | Provider where the Kafka cluster is deployed. Valid values are AWS and AZURE. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.vendor">vendor</a></code> | <code>java.lang.String</code> | Vendor that manages the Kafka cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | Amazon Resource Name (ARN). Required for AWS Provider and MSK vendor. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.dnsDomain">dnsDomain</a></code> | <code>java.lang.String</code> | The domain hostname. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.dnsSubDomain">dnsSubDomain</a></code> | <code>java.util.List<java.lang.String></code> | Sub-Domain name of Confluent cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of the Provider’s cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.serviceEndpointId">serviceEndpointId</a></code> | <code>java.lang.String</code> | For AZURE EVENTHUB, this is the [namespace endpoint ID](https://learn.microsoft.com/en-us/rest/api/eventhub/namespaces/get). For AWS CONFLUENT cluster, this is the [VPC Endpoint service name](https://docs.confluent.io/cloud/current/networking/private-links/aws-privatelink.html). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Unique 24-hexadecimal digit string that identifies your project.

Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.<br>**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group or project id remains the same. The resource and corresponding endpoints use the term groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/resources/stream_privatelink_endpoint#project_id StreamPrivatelinkEndpoint#project_id}

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

Provider where the Kafka cluster is deployed. Valid values are AWS and AZURE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/resources/stream_privatelink_endpoint#provider_name StreamPrivatelinkEndpoint#provider_name}

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.vendor"></a>

```java
public java.lang.String getVendor();
```

- *Type:* java.lang.String

Vendor that manages the Kafka cluster.

The following are the vendor values per provider:<br>- MSK and CONFLUENT for the AWS provider.<br>- EVENTHUB and CONFLUENT for the AZURE provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/resources/stream_privatelink_endpoint#vendor StreamPrivatelinkEndpoint#vendor}

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Amazon Resource Name (ARN). Required for AWS Provider and MSK vendor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/resources/stream_privatelink_endpoint#arn StreamPrivatelinkEndpoint#arn}

---

##### `dnsDomain`<sup>Optional</sup> <a name="dnsDomain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.dnsDomain"></a>

```java
public java.lang.String getDnsDomain();
```

- *Type:* java.lang.String

The domain hostname.

Required for the following provider and vendor combinations:<br>- AWS provider with CONFLUENT vendor.<br>- AZURE provider with EVENTHUB or CONFLUENT vendor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/resources/stream_privatelink_endpoint#dns_domain StreamPrivatelinkEndpoint#dns_domain}

---

##### `dnsSubDomain`<sup>Optional</sup> <a name="dnsSubDomain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.dnsSubDomain"></a>

```java
public java.util.List<java.lang.String> getDnsSubDomain();
```

- *Type:* java.util.List<java.lang.String>

Sub-Domain name of Confluent cluster.

These are typically your availability zones. Required for AWS Provider and CONFLUENT vendor. If your AWS CONFLUENT cluster doesn't use subdomains, you must set this to the empty array [].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/resources/stream_privatelink_endpoint#dns_sub_domain StreamPrivatelinkEndpoint#dns_sub_domain}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the Provider’s cluster.

See [AZURE](https://www.mongodb.com/docs/atlas/reference/microsoft-azure/#stream-processing-instances) and [AWS](https://www.mongodb.com/docs/atlas/reference/amazon-aws/#stream-processing-instances) supported regions. When the vendor is `CONFLUENT`, this is the domain name of Confluent cluster. When the vendor is `MSK`, this is computed by the API from the provided `arn`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/resources/stream_privatelink_endpoint#region StreamPrivatelinkEndpoint#region}

---

##### `serviceEndpointId`<sup>Optional</sup> <a name="serviceEndpointId" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.serviceEndpointId"></a>

```java
public java.lang.String getServiceEndpointId();
```

- *Type:* java.lang.String

For AZURE EVENTHUB, this is the [namespace endpoint ID](https://learn.microsoft.com/en-us/rest/api/eventhub/namespaces/get). For AWS CONFLUENT cluster, this is the [VPC Endpoint service name](https://docs.confluent.io/cloud/current/networking/private-links/aws-privatelink.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/resources/stream_privatelink_endpoint#service_endpoint_id StreamPrivatelinkEndpoint#service_endpoint_id}

---



